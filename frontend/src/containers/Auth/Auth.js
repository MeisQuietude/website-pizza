import React, { Component }  from "react";
import { connect }           from "react-redux";
import AuthForm              from "../../components/AuthForm/AuthForm";
import Modal                 from "../../components/UI/Modal/Modal";
import { signOut, signUpIn } from "../../store/actions/auth";
import { updateCart }        from "../../store/actions/cart";
import css                   from "./Auth.module.css";

class Auth extends Component {
    constructor( props ) {
        super(props);
        this.state = {
            showModal: false,
            login: "",
            password: "",
            authError: null,
        };
    }

    componentDidMount() {
        fetch("/users/token", { method: "POST" })
            .then(( response ) => response.json())
            .then(payload => {
                if ( payload.user && payload.user.login ) {
                    const { user, cart } = payload;
                    this.props.signUpIn(user);
                    this.props.updateCart(cart);
                }
            })
            .catch(console.log);
    }

    openModal = () => {
        this.setState({ showModal: true });
    };

    closeModal = () => {
        this.setState({ showModal: false });
    };

    changeLoginHandler = ( event ) => {
        this.setState({ login: event.target.value });
    };

    changePasswordHandler = ( event ) => {
        this.setState({ password: event.target.value });
    };

    submitAuthHandler = ( event ) => {
        event.preventDefault();
        const { login, password } = this.state;
        const { cart } = this.props;
        this.authSignUpIn(login, password, cart);
    };

    authSignUpIn = ( login, password, cart ) => {
        const data = { login, password, cart };

        fetch("/users/signupin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then(response => {
                if ( response.status === 304 ) {
                    return {
                        data: {
                            user: null,
                            cart: {},
                            authError: "Password is incorrect",
                        },
                    };
                } else {
                    return response.json();
                }
            })
            .then(payload => {
                const { user, cart } = payload.data;
                if ( user != null ) {
                    this.props.signUpIn(user);
                    this.props.updateCart(cart);
                    this.closeModal();
                }
                if ( payload.data.authError ) {
                    this.setState({ authError: payload.data.authError });
                }
            })
            .catch(error => {
                console.log(error);
            });
    };

    authSignOut = () => {
        this.props.signOut();
    };

    render() {
        return (
            <React.Fragment>
                <div className={css.AuthButtons}>
                    {
                        (this.props.isAuth) ?
                            <button className={css.signout} onClick={this.authSignOut}>Sign Out</button> :
                            <button className={css.signin} onClick={this.openModal}>Sign In</button>
                    }
                </div>
                <Modal show={this.state.showModal} closeModal={this.closeModal}>
                    {(this.state.authError) ? <h4>{this.state.authError}</h4> : null}
                    <AuthForm
                        payload={{ cart: this.props.cart, login: this.state.login, password: this.state.password }}
                        handlers={{
                            login: this.changeLoginHandler,
                            password: this.changePasswordHandler,
                            submit: this.submitAuthHandler,
                        }} />
                </Modal>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuth,
        user: state.auth.user,
        cart: state.cart.cart,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        signUpIn: ( user ) => dispatch(signUpIn(user)),
        signOut: () => dispatch(signOut()),
        updateCart: ( cart ) => dispatch(updateCart(cart)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);

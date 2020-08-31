import React, { Component }    from "react";
import PizzaItems              from "../../components/PizzaBox/PizzaItems/PizzaItems";
import { connect }             from "react-redux";
import { incrementOrderPizza } from "../../store/actions/cart";
import { initPizza }           from "../../store/actions/pizzaBox";

class PizzaBox extends Component {
    constructor( props ) {
        super(props);
        this.state = {
            pizzas: [],
            error: false,
        };
    }

    componentDidMount() {
        fetch(
            "/pizzas",
            { method: "GET" },
        )
            .then(response => {
                return response.json();
            })
            .then(( response ) => {
                this.setState({ pizzas: response.data.pizzas });
                this.props.initPizzaToStore(response.data.pizzas);
            })
            .catch(( error ) => {
                this.setState({ error: error });
            });
    }

    componentDidUpdate( prevProps, prevState, snapshot ) {
        if ( prevProps.cart !== this.props.cart ) {
            const cart = this.props.cart;
            const data = { cart };

            return fetch("/users/update-cart", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
        }
    }

    render() {
        return (
            <div>
                <PizzaItems
                    data={this.state.pizzas}
                    handlers={{
                        add: this.props.addPizzaToCart,
                    }}
                />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        cart: state.cart.cart,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addPizzaToCart: ( pizzaKey ) => dispatch(incrementOrderPizza(pizzaKey)),
        initPizzaToStore: ( pizzas ) => dispatch(initPizza(pizzas)),
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(PizzaBox);

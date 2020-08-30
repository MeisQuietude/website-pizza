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

const mapDispatchToProps = dispatch => {
    return {
        addPizzaToCart: ( pizzaKey ) => dispatch(incrementOrderPizza(pizzaKey)),
        initPizzaToStore: ( pizzas ) => dispatch(initPizza(pizzas)),
    };
};


export default connect(null, mapDispatchToProps)(PizzaBox);

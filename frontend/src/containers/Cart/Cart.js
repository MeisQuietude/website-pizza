import React, { Component }                         from "react";
import { connect }                                  from "react-redux";
import CartItems                                    from "../../components/Cart/CartItems/CartItems";
import { decrementOrderPizza, incrementOrderPizza } from "../../store/actions/cart";

class Cart extends Component {
    render() {
        const mapItemsToCart = Object.keys(this.props.cart).map(key => {
            const pizza = this.props.pizzas.find(e => e.key === key) || {};
            const count = this.props.cart[key];

            return {
                ...pizza,
                count,
                cost: pizza.price,
                price: pizza.price * count,
            };
        });

        return (
            <React.Fragment>
                {Object.keys(this.props.cart).length ?
                    <React.Fragment>
                        <CartItems
                            data={mapItemsToCart}
                            cartHandlers={{
                                add: this.props.addPizzaToCart,
                                remove: this.props.removePizzaFromCart,
                            }} />
                    </React.Fragment>
                    :
                    <h1>Your cart is empty</h1>
                }
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        pizzas: state.pizzaBox.pizza || [],
        cart: state.cart.cart || {},
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addPizzaToCart: ( pizzaKey ) => dispatch(incrementOrderPizza(pizzaKey)),
        removePizzaFromCart: ( pizzaKey ) => dispatch(decrementOrderPizza(pizzaKey)),
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Cart);

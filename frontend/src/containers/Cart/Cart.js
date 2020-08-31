import React, { Component }                         from "react";
import { connect }                                  from "react-redux";
import CartItems                                    from "../../components/Cart/CartItems/CartItems";
import { decrementOrderPizza, incrementOrderPizza } from "../../store/actions/cart";
import { initPizza }                                from "../../store/actions/pizzaBox";
import Checkout                                     from "../../components/Cart/Checkout/Checkout";

const DELIVERY_COST = 7;
const CURRENCY = {
    USD: { label: "$", coef: 1 },
    EUR: { label: "€", coef: 0.84 },
};

class Cart extends Component {
    state = {
        currency: CURRENCY.USD,
    };

    async getSnapshotBeforeUpdate( prevProps, prevState ) {
        const cart = this.props.cart;
        const data = { cart };

        await fetch("/users/update-cart", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
    }

    componentDidMount() {
        return fetch(
            "/pizzas",
            { method: "GET" },
        )
            .then(response => {
                return response.json();
            })
            .then(( response ) => {
                this.props.initPizza(response.data.pizzas);
            })
            .catch(( error ) => {
                this.setState({ error: error });
            });
    }

    calculateDeliveryPrice = () => {
        return DELIVERY_COST * this.state.currency.coef;
    };

    calculateOrderPrice = () => {
        const cart = { ...this.props.cart };
        const pizzas = [...this.props.pizzas];

        const orderPrice = Object.keys(cart)
            .map(key => {
                const price = (pizzas.find(item => item.key === key) || {}).price;
                const count = cart[key];
                return price * count * this.state.currency.coef;
            })
            .reduce(( current, next ) => current + next, 0);

        return orderPrice;
    };

    swapCurrency = () => {
        this.setState({
            currency: this.state.currency.label === CURRENCY.USD.label ? CURRENCY.EUR : CURRENCY.USD,
        });
    };

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

        const deliveryPrice = this.calculateDeliveryPrice();
        const orderPrice = this.calculateOrderPrice();
        const totalPrice = orderPrice + deliveryPrice;

        return (
            <React.Fragment>
                <div>
                    {
                        Object.keys(this.props.cart).length ?
                            <React.Fragment>
                                <CartItems
                                    data={mapItemsToCart}
                                    cartHandlers={{
                                        add: this.props.addPizzaToCart,
                                        remove: this.props.removePizzaFromCart,
                                    }} />
                                <Checkout
                                    deliveryPrice={deliveryPrice}
                                    orderPrice={orderPrice}
                                    totalPrice={totalPrice}
                                    currency={this.state.currency}
                                    currencyHandler={this.swapCurrency} />
                            </React.Fragment>

                            :
                            <h1>Your cart is empty</h1>
                    }
                </div>

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
        initPizza: ( pizzas ) => dispatch(initPizza(pizzas)),
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Cart);

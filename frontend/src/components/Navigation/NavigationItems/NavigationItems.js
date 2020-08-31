import React          from "react";
import { connect }    from "react-redux";
import NavigationItem from "./NavigationItem/NavigationItem";
import css            from "./NavigationItems.module.css";
import Auth           from "../../../containers/Auth/Auth";

const NavigationItems = ( props ) => {
    const cartQuantity = Object.values(props.cart)
        .reduce(( quantity, next ) => quantity + next, 0);

    return (
        <ul className={css.NavigationItems}>
            <NavigationItem link="/pizzas" exact>Pizza</NavigationItem>
            <NavigationItem link="/cart" exact>
                Cart {cartQuantity > 0 ? <span>({cartQuantity})</span> : null}
            </NavigationItem>
            <Auth />
        </ul>

    );
};

const mapStateToProps = state => {
    return {
        cart: state.cart.cart || {},
    };
};

export default connect(mapStateToProps)(NavigationItems);

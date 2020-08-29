import React          from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import css            from "./NavigationItems.module.css";

const NavigationItems = ( props ) => (
    <ul className={css.NavigationItems}>
        <NavigationItem link="/pizzas" exact>Pizza</NavigationItem>
        <NavigationItem link="/order" exact>Order</NavigationItem>
        <NavigationItem link="/login" exact>Log in</NavigationItem>
        <NavigationItem link="/logout" exact>Log out</NavigationItem>
    </ul>

);

export default NavigationItems;

import React       from "react";
import { NavLink } from "react-router-dom";
import css         from "./NavigationItem.module.css";

const NavigationItem = ( props ) => (
    <li className={css.NavigationItem}>
        <NavLink
            to={props.link}
            exact={props.exact}
            activeClassName={css.active}>
            <span>
                {props.children}
            </span>
        </NavLink>
    </li>
);

export default NavigationItem;

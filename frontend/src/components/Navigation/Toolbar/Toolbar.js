import React           from "react";
import css             from "./Toolbar.module.css";
import NavigationItems from "../NavigationItems/NavigationItems";
import Logo            from "../../Logo/Logo";

const Toolbar = ( props ) => (
    <header className={css.Toolbar}>
        <Logo />
        <NavigationItems />
    </header>
);

export default Toolbar;

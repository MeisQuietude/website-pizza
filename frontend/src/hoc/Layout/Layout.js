import React, { Component } from "react";
import Toolbar              from "../../components/Navigation/Toolbar/Toolbar";
import css                  from "./Layout.module.css";

class Layout extends Component {
    render() {
        return (
            <React.Fragment>
                <Toolbar />
                <main className={css.Main}>
                    {this.props.children}
                </main>
            </React.Fragment>
        );
    }
}

export default Layout;

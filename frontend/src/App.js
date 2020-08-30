import React                           from "react";
import { Redirect, Route, withRouter } from "react-router-dom";
import Layout                          from "./hoc/Layout/Layout";
import PizzaBox                        from "./containers/PizzaBox/PizzaBox";
import Cart                            from "./containers/Cart/Cart";

class App extends React.Component {
    render() {
        return (
            <Layout>
                <Route path="/" exact>
                    <Redirect to="/pizzas" />
                </Route>
                <Route path="/pizzas" exact component={PizzaBox} />
                <Route path="/cart" exact component={Cart} />
            </Layout>
        );
    }
}

export default withRouter(App);

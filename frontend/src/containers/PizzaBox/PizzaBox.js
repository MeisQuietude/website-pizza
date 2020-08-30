import React, { Component } from "react";
import PizzaItems           from "../../components/PizzaBox/PizzaItems/PizzaItems";

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
            })
            .catch(( error ) => {
                this.setState({ error: error });
            });
    }

    render() {
        return (
            <div>
                <PizzaItems data={this.state.pizzas} />
            </div>
        );
    }
}

export default PizzaBox;

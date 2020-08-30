import React     from "react";
import PizzaItem from "./PizzaItem/PizzaItem";
import css       from "./PizzaItems.module.css";

const PizzaItems = ( props ) => (
    <div className={css.PizzaItems}>
        {props.data.map(pizza =>
            <PizzaItem
                key={pizza.key}
                title={pizza.title}
                description={pizza.description} />)}
    </div>
);

export default PizzaItems;

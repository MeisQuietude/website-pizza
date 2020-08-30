import React from "react";
import css   from "./PizzaItem.module.css";

const descriptionLengthLimit = 170;

const PizzaItem = ( props ) => {
    let { title, description } = props.data;
    if ( description.length > descriptionLengthLimit ) {
        description = description.slice(0, descriptionLengthLimit) + "...";
    }
    return (
        <div className={css.PizzaItem}>
            <h3>{title}</h3>
            <hr />
            <p className={css.description}><i>{description}</i></p>
            <p className={css.buttonContainer}>
                <button onClick={props.addHandler.bind(null, props.data.key)}>Add to Cart</button>
            </p>
        </div>
    );
};

export default PizzaItem;

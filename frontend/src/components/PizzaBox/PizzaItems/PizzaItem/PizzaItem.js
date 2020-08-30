import React from "react";
import css   from "./PizzaItem.module.css";

const descriptionLengthLimit = 170;

const PizzaItem = ( props ) => {
    let { title, description } = props;
    if ( description.length > descriptionLengthLimit ) {
        description = description.slice(0, descriptionLengthLimit) + "...";
    }
    return (
        <div className={css.PizzaItem}>
            <h3>{title}</h3>
            <hr />
            <p className={css.description}><i>{description}</i></p>
            <p className={css.buttonContainer}>
                <button>Add to Cart</button>
            </p>
        </div>
    );
};

export default PizzaItem;

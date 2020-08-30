import React    from "react";
import CartItem from "./CartItem/CartItem";
import css      from "./CartItems.module.css";

const CartItems = ( props ) => {
    const items = props.data || {};

    return (
        <div className={css.CartItems}>
            {
                items.map(item => {
                    return <CartItem
                        key={item.key}
                        payload={{ ...item }}
                        handlers={props.cartHandlers} />;
                })
            }
        </div>
    );
};

export default CartItems;

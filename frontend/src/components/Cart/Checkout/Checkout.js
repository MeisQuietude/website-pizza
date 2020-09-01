import React from "react";
import css   from "./Checkout.module.css";

const Checkout = ( props ) => {
    const CUR = (props.currency && props.currency.label) || "$";

    return (
        <div className={css.Checkout}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                    <h4>Delivery ({CUR}{props.deliveryPrice.toFixed(2)}) + </h4>
                </div>
                <div>
                    <h4>Order Price ({CUR}{props.orderPrice.toFixed(2)}) = </h4>
                </div>
                <div>
                    <h4>Total Price ({CUR}{props.totalPrice.toFixed(2)})</h4>
                </div>
                <input type="button" value={`Price ${CUR}`} onClick={props.currencyHandler} />
            </div>
            <div>
                <button>Checkout</button>
            </div>
        </div>
    );
};

export default Checkout;

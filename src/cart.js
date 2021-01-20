import React from "react";
import CartItem from "./cartItem";

//props are similar to function arguments
const Cart = (props) => {
    const {products} = props;
    return (
        <div className="cart">
            {products.map((product) => {
                return (<CartItem
                    product={product}
                    key={product.id}
                    onIncrease={props.onIncrease}
                    onDecrease={props.onDecrease}
                    onDelete={props.onDelete}/>)
            })}
        </div>
    );
}

export default Cart;
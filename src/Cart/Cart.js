import React from 'react';

const Cart = (props) => {
    const {cart} = props;

    // const totalReducer = (previous, priduct)=> previous + priduct.price;
    // const total = cart.reduce(totalReducer, 0);


    let total = 0;
    for(const product of cart){
        total = total + product.price;
    }

    const shipping = total > 0 ? 15 : 0;
    const tex = (total + shipping) / 10;
    const grandTotal = total + shipping + tex;

    return (
        <div>
            <h3>Order Summary: </h3>
            <h5>Items Ordered: {props.cart.length}</h5>
            <br />
            <p>Total: {total.toFixed(2)}</p>
            <p>Shipping: {shipping.toFixed(2)}</p>
            <p>Tax: {tex.toFixed(2)}</p>
            <p>Grand Total: {grandTotal.toFixed(2)}</p>
                
        </div>
    );
};

export default Cart;
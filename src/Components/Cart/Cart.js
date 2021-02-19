import React from 'react';
import { Button } from 'react-bootstrap';
import "./Cart..css"

const Cart = (props) => {
    const cart = props.cart
    const brandTotal = cart.reduce((sum,brand)=>sum+brand.amount,0);
    const tax = brandTotal/10;

    return (
        <div>
            <h1 className="cart-choose">Total Brand Choosed: {cart.length}</h1>
            <p className="para">Amount: <b>{brandTotal}</b></p>
            <p className="para">Tax:  <b>{tax}</b> </p>
            <p className="para">Grand Total: <b> {brandTotal+tax}</b></p>
            <Button variant="info">Pay to Join</Button>
        </div>
    );
};

export default Cart;

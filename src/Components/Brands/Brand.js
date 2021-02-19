import React from 'react';
import "./Brand.css";


import Button from 'react-bootstrap/Button';

const Brand = (props) => {
    const {name,ambassador,amount,image} = props.brand
    return (
        <div className="brand">
            <div>
                <img src={image} alt="" />
            </div>
            <div>
                <h3>Name: <span className="brand-name">{name}</span> </h3>
                <p>Ambassador: <b>{ambassador}</b> </p>
                <p>Amount: {amount} Taka</p>
                <Button variant="warning" onClick={ ()=> (props.handleButton(props.brand))}>  Choose Now</Button>

            </div>
        </div>
    );
};

export default Brand;



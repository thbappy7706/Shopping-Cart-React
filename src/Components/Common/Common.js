import React, {useState} from 'react';
import brandData from "../../proData/brandData";
import Brand from "../Brands/Brand";
import Cart from "../Cart/Cart";
import "./Common.css"


const Common = () => {
 const[brand,setBrand] = useState(brandData);
 const[cart,setCart] = useState([]);
 const handleButton=((brand)=>{
 const newCart = [...cart,brand];
 setCart(newCart);

    })

    return (
        <div className="common">
                <div className="brand-container">
                    {
                        brand.map((brand)=>(
                            <Brand brand={brand} handleButton={handleButton}>

                            </Brand>
                        ))
                    }
                </div>


            <div className="cart-container">

                <Cart cart={cart}></Cart>
            </div>



        </div>
    );
};

export default Common;

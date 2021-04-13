import React from 'react'
import "./Checkout.css";
import Subtotal from './Subtotal'

function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />
                <div>
                    <h2 className="checkout__title">Your Shopping Basket</h2>
                    {/* All the basket items will go here */}
                    {/* Basket */}
                    {/* Basket */}
                    {/* Basket */}
                    {/* Basket */}
                    {/* Basket */}
                </div>
            </div>
            <div className="checkout__right">
                <h2>Your subtotal will go here</h2>
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout

import React from 'react'
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal'
import { useStateValue } from "./StateProvider"

function Checkout() {
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />
                <div>
                    <h2 className="checkout__title">Your Shopping Basket</h2>
                    {/* All the basket items will go here */}
                    {basket.map(item => {
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    })}
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

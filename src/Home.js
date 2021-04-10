import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                {/* img contains the banner just below the header */}
                <img className="home__image" id="123" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.JPG" alt="" />

                <div className="home__row">
                    <Product id="456" title="The lean startup" image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC-SY400_.jpg" price="29.99" rating={5} />
                    <Product id="789" title="Dash DMW001RD, Mini Waffle Maker Machine for Individuals, Paninis, Hash Browns, with Easy to Clean, Non-Stick Sides, 4 Inch, Red" image="https://m.media-amazon.com/images/I/61TpCHFFl6L._AC_SY400_.jpg" price="59.99" rating={4} />
                </div>

                <div className="home__row">
                    <Product id="1011" title="TomCare Cube Storage 12-Cube Bookshelf Closet Organizer Storage Shelves Square Closet Cabinet Shelves for Bedroom Office Living Room, Black" image="https://m.media-amazon.com/images/I/51f8uV3i+VL._AC_UL320_.jpg" price="53.99" rating={3} />
                    <Product id="1213" title="Amazon Basics Classic Puresoft PU-Padded Mid-Back Office Computer Desk Chair with Armrest - Black" image="https://m.media-amazon.com/images/I/71i08qnZeDL._AC_UL320_.jpg" price="82.99" rating={5} />
                    <Product id="1415" title="Amazon Basics 48 Pack AA High-Performance Alkaline Batteries, 10-Year Shelf Life, Easy to Open Value Pack" image="https://m.media-amazon.com/images/I/71IdKRlm8+L._AC_UL320_.jpg" price="15.99" rating={3} />
                </div>

                <div className="home__row">
                    <Product id="1617" title="TCL 50-inch Class 4-Series 4K UHD Smart Roku LED TV - 50S435, 2021 Model" image="https://m.media-amazon.com/images/I/714hn7q7WxL._AC_UL320_.jpg" price="159.99" rating={5} />
                </div>
            </div>
        </div>
    )
}

export default Home

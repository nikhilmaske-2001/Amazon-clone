import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { Link } from 'react-router-dom';
import { useStateValue } from "./StateProvider"

function Header() {
    const [{ basket }, dispatch] = useStateValue();

    return (
        // "header" is used to wrap all the elements present in the top most (header) part of the amazon app
        <div className='header'>
            {/* Link adds the link to the homepage (i.e "/") */}
            <Link to="/">
                {/* This is amazon logo */}
                <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
            </Link>

            {/* This is input search field */}
            <div className="header__search">
                <input className="header__searchInput" type="text" />
                {/* Search icon Logo from material ui */}
                <SearchIcon className="header__searchIcon" />
            </div>

            {/* This is the three option placed in the Header */}
            <div className="header__nav">
                <Link to='/login'>
                    {/* This is the first option */}
                    <div className="header__option">
                        <span className="header__optionLineOne">
                            Hello Guests
                    </span>
                        <span className="header__optionLineTwo">
                            Sign in
                    </span>
                    </div>
                </Link>

                {/* This is the second option */}
                <div className="header__option">
                    <span className="header__optionLineOne">
                        Returns
                    </span>
                    <span className="header__optionLineTwo">
                        Orders
                    </span>
                </div>

                {/* This is the third option */}
                <div className="header__option">
                    <span className="header__optionLineOne">
                        Your
                    </span>
                    <span className="header__optionLineTwo">
                        Prime
                    </span>
                </div>

                <Link to='/checkout'>
                    <div className="header__optionBasket">
                        {/* Shopping basket icon from material ui */}
                        <ShoppingBasketIcon />
                        <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header

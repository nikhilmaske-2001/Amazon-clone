import React from 'react'
import './Login.css'
import { Link } from "react-router-dom"

function Login() {
    return (
        <div className='login'>
            <Link to='/'>
                <img className="login__logo" src='http://blog.logomyway.com/wp-content/uploads/2017/02/2017-amazon-logo.jpg' />
            </Link>

            <div className="login__container">
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='text' />

                    <h5>Password</h5>
                    <input type='password' />

                    <button className="login__signInButton">Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of USE & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads
                </p>

                <button className="login__registerButton">Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login

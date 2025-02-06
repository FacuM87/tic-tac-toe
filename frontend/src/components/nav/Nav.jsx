import React, { useState } from 'react'
import { NavLink } from 'react-router'
import "./Nav.css"
import SignIn from '../SignIn-SignUp/SignIn/SignIn'

const Nav = () => {
    const [signInModal, setSignInModal] = useState(false)
    const handleSubmit = () => {}

    return (
        <>
        <nav className='nav'>
            <img src="" alt="" />
            <ul>
                <li><NavLink to="/"> Home </NavLink></li>
                <li><NavLink to="/tictactoe"> Tic Tac Toe </NavLink></li>
                <li><NavLink to="/snake"> Snake </NavLink></li>
            </ul>
            <div className='login-register-section'>
                <button className='signInBtn' onClick={()=>{setSignInModal(!signInModal)}}>Sign in</button>
                <button className='signUpBtn'>Sign up</button>
            </div>
        </nav>
        {signInModal && <SignIn/>}
        </>
    )
}

export default Nav
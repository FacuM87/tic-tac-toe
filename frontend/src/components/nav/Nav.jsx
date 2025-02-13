import React, { useState } from 'react'
import { NavLink } from 'react-router'
import "./Nav.css"
import SignIn from '../SignIn-SignUp/SignIn/SignIn'
import { useUserStore } from '../../hooks/userStore.js'

const Nav = () => {
    const [signInModal, setSignInModal] = useState(false)
    const user = useUserStore((state) => state.user);
    
    return (
        <header>
            <nav className='nav'>
                <img src="" alt="" />
                <ul>
                    <li><NavLink to="/"> Home </NavLink></li>
                    <li><NavLink to="/tictactoe"> Tic Tac Toe </NavLink></li>
                    <li><NavLink to="/snake"> Snake </NavLink></li>
                </ul>
                {user? (
                    <div className='profile-logout-section'>
                        <div>Welcome {user.user.name}! </div>
                        <button className='logout-btn'> Logout </button>
                    </div>
                ):(
                <div className='login-register-section'>
                    <button className='signInBtn' onClick={() => { setSignInModal(!signInModal) }}>Sign in</button>
                    <button className='signUpBtn'>Sign up</button>
                </div>
                )}
            </nav>
            {(signInModal && !user) && <SignIn/>}    
        </header>
    )
}

export default Nav
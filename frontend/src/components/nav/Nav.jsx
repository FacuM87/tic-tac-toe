import React, { useState } from 'react'
import { NavLink } from 'react-router'
import SignIn from '../SignIn-SignUp/SignIn/SignIn'
import { useUserStore } from '../../hooks/userStore.js'

const Nav = () => {
    const [signInModal, setSignInModal] = useState(false)
    const user = useUserStore((state) => state.user);
    
    return (
        <header>
            <nav className='flex items-center justify-between pt-1 min-w-full'>
                <img src="" alt="" />
                <ul className='nav-links-container flex gap-6'>
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
                <div className='flex gap-2 pr-8'>
                    <button className='cursor-pointer bg-amber-100 rounded-2xl p-2 hover:bg-amber-200 transition-all duration-350 ease-in-out' onClick={() => { setSignInModal(!signInModal) }}>Sign in</button>
                    <button className='cursor-pointer'>Sign up</button>
                </div>
                )}
            </nav>
            {(signInModal && !user) && <SignIn/>}    
        </header>
    )
}

export default Nav
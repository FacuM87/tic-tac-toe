import React from 'react'
import { NavLink } from 'react-router'

const Nav = () => {
    return (
        <nav className='nav'>
            <ul>
                <li><NavLink to="/"> Home </NavLink></li>
                <li><NavLink to="/tictactoe"> Tic Tac Toe </NavLink></li>
                <li><NavLink to="/snake"> Snake </NavLink></li>
            </ul>
        </nav>
    )
}

export default Nav
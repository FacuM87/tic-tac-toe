import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router"
import TicTacToe from './components/games/tic-tac-toe/TicTacToe.jsx'
import Snake from './components/games/snake/Snake.jsx'
import Nav from './components/nav/Nav.jsx'
import Home from './Home.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/tictactoe' element={<TicTacToe />} />
        <Route path='/snake' element={<Snake />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

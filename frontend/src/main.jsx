import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router"
import App from './App.jsx'
import TicTacToe from './components/games/tic-tac-toe/TicTacToe.jsx'
import Snake from './components/games/snake/Snake.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/tictactoe' element={<TicTacToe />} />
        <Route path='/snake' element={<Snake />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

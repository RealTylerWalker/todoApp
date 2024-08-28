import { useState } from 'react'
import './App.css'
import About from './components/About'
import Home from './components/Home'
import Completed from './components/Completed'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import { TodoContextProvider } from './context/TodoContext'



function App() {


  return (
    <div>
      <TodoContextProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/completed' element={<Completed />} />
          <Route path='/about' element={<About />} />
        </Routes>
        <Navbar />
      </TodoContextProvider>
    </div>
  )
}
export default App

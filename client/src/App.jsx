import { useState } from 'react'
import './App.css'
import About from './components/About'
import Home from './components/Home'
import Completed from './components/Completed'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import { TodoContextProvider } from './context/TodoContext'
import Header from './components/Header'
import Footer from './components/Footer'



function App() {


  return (
    <div>

      <TodoContextProvider>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/completed' element={<Completed />} />
          <Route path='/about' element={<About />} />
        </Routes>
        <Navbar />
        <Footer />
      </TodoContextProvider>

    </div>
  )
}
export default App

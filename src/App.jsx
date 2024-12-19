import React from 'react'
import About from './pages/About'
import './App.css'
import Home from './pages/Home'
import {Routes, Route, Link} from 'react-router-dom'
import Login from './pages/login/Login'

import './App.css'
import Products from './pages/Products'
import Details from './pages/Details'

function App() {


  return (
    <>
      <h1 className='text-danger'>Hello world</h1>
      <Link to='/' className='m-3'>Home</Link>
      <Link to='/about' className='m-3'>About</Link>
      <Link to='/login' className='m-3'>Login</Link>
      <Link to='/products' className='m-3'>Products</Link>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/products/:productId' element={<Details/>}/>
      </Routes>
      
      
    </>
  )
}

export default App

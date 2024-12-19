import React from 'react'
import { useNavigate } from 'react-router-dom'
import './login.css'

function Login() {

  const navigate = useNavigate()

  function handleLogin(e){
    e.preventDefault()
    
    let token = 'shjdbwdewd'
    
    localStorage.setItem('access-token', token)
    navigate('/')
    
    console.log('submitted')

  }

  return (
    <div className='display-flex flex-column align-items-center min-vh-100 justify-content-center bg-dark pt-5'>
      <form onSubmit={handleLogin} className="form bg-light ">
        <h2 className="display-3 text-center">Login</h2>
      <div className='mb-3'>
        <label htmlFor="email" className="form-label">Email Address</label>
        <input type="email" className='form-control' placeholder='Enter Your Email' />
      </div>
      <div className='mb-3'>
        <label htmlFor="password" className="form-label">Password</label>
        <input type="password" className='form-control' placeholder='Enter password' />
      </div>
      <button className="btn btn-success w-100">Submit</button>
    </form>
    </div>
  )
}

export default Login

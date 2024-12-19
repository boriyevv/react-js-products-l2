import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
// styles
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

createRoot(document.getElementById('root')).render(
    <Router>
      <App />
    </Router>
)

import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'; // Removed Routes and Route
import './index.css'
import App from './App.jsx'
// ServicesPage import is no longer needed here as App.jsx handles its routing

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <App /> {/* App component now handles all routes */}
    </Router>
  </StrictMode>,
)

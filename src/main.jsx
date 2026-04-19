import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// We wrap in StrictMode to catch potential problems during development
// This ensures our Framer Motion animations and React hooks behave predictably
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
import React from 'react'

import ReactDOM from 'react-dom/client'

import {BrouserRouter, Routes, Route} from "react-router-dom";

import App from './App'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrouserRouter>
    <Routes>
    </Routes>
    </BrouserRouter>
    <App />
  </React.StrictMode>,
)

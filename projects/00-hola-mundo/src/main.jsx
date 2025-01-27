import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './app'
import './index.css'
import './app.css'

createRoot(document.getElementById('root')).render(
    <App/>
)

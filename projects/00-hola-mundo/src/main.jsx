import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'

const Button = ({texto}) => {
    return <button>{texto}</button>
}

createRoot(document.getElementById('root')).render(
    <React.Fragment>
    <Button texto="123"></Button>
    <Button texto="Nicolas gomez"></Button>
    </React.Fragment>
)

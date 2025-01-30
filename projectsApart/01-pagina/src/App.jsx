import { useState } from 'react'
import { Nav } from './components/Nav'
import { Modelo } from './components/Modelo'
import './App.css'

function App() {
  const [carrito, setCarrito] = useState([])

  const agregarAlCarrito = (nombre) => {
    setCarrito([...carrito,nombre])
  }

  return (
    <>
      <Nav objetosDelCarrito={carrito} />
      <h1>Zapas</h1>
      <h2>pagina de venta de zapatillas</h2>
      <section className='modelos'>
        <h3>modelos</h3>
        <div className="contenedor-modelos">
        <Modelo nombre={'Nike Air'} agregarAlCarrito={agregarAlCarrito}/>
        <Modelo nombre={'Adidas Boost'} agregarAlCarrito={agregarAlCarrito}/>
        <Modelo nombre={'Puma RS'} agregarAlCarrito={agregarAlCarrito}/>
        </div>
      </section>
    </>
  )
}

export default App

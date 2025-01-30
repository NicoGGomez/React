import { useState } from 'react'

export const Nav = ( {objetosDelCarrito} ) => {

    const [open, setOpen] = useState(false);

    const openCarrito = () => {
        setOpen(!open)
    }

    return (
        <>
        <nav className="nav">
            <ul>
                <li><a href="">inicio</a></li>
                <li><a href="">menu</a></li>
                <li><a href="">usuario</a></li>
                <li><button onClick={openCarrito} className="btn-carrito">Carrito 🛒 {objetosDelCarrito.length}</button></li>
            </ul>
        </nav>
        <section className='section-carrito'>
        <div style={{display: `${open ? 'flex' : 'none'}`}} className="carrito">
        <p>objetos guardados</p>
        <ul>{objetosDelCarrito.map((obj, index) => (
                    <li key={index}>
                        <a href={`https://${obj}.com`} target="_blank">{obj}</a>
                    </li>
                ))}</ul>
        </div>
      </section>
        </>
    );
};

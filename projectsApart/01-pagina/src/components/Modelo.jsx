import { useState } from "react";

export const Modelo = ({nombre, agregarAlCarrito}) => {
    const [buy, setBuy] = useState(false)

    const handleClick = () => {
        if(!buy){
            agregarAlCarrito(nombre)
        }
        setBuy(true)
    }

    return (
        <>
        <article>
            <h4>{nombre}</h4>
            <p>descripcion de las {nombre}</p>
            <img src="https://via.placeholder.com/150" alt="modelo 1"/>
            <button onClick={handleClick}>{buy ? "agregado al carrito" : "comprar" }</button>
        </article>
        </>
    );
}
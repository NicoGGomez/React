// IMPORTANDO EL USESTATE (VERIFICA EL ESTADO DE UNA VARIABLE)
import { useState } from "react"

export function TwitterFollowCard ({formatUserName, userName, name, initialIsFollowing}) {

    // DECLARAMOS EL ESTADO DE LA VARIABLE COMO INITIALISFOLLOWING PORQ ES EL ESTADO QUE TIENE EL USUARIO
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    // GUARDAMOS EN UNA VARIABLE UNA IMAGEN QUE VARIE DEPENDIENDO DEL USUARIO
    const imgSrc = `https://unavatar.io/x/${userName}`

    // LE DECIMOS Q SI LO SIGUE MUESTRE SIGUIENDO, SI NO MUESTRE SEGUIR
    const text = isFollowing 
    ? 'Siguiendo' 
    : 'Seguir'
    const buttonClassName = isFollowing 
    ? 'tw-followCard-actions following' 
    : 'tw-followCard-actions'

    // FUNCUION QUE SE VA A EJECUTAR UAN VEZ SE HAGA CLICK
    const handleClick = () => { 
        setIsFollowing(!isFollowing)
    }

    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
            <img className="tw-followCard-avatar" alt="el avatar de vegetta777" src={imgSrc} />
                <div className="tw-followCard-info">
                    <strong>{name}</strong>
                    <span>{formatUserName(userName)}</span>
                </div>
            </header>
            <aside className={buttonClassName}>
                <button onClick={handleClick} >
                    <span className="tw-followCard-text">{text}</span>
                    <span className="tw-followCard-stopFollow">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}
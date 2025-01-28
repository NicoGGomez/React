import { useEffect, useState } from "react"

export const FollowMouse = () => {
    const [enabled, setEnabled] = useState(false)
    const [position, setPosition] = useState({ x: -100, y: -100 })
    const [view, setView] = useState(false)

    const activeMove = () => {
        setEnabled(!enabled)
        setView(!view)
    }

    useEffect(() => {
      const handleMove = (event) => {
        const { clientX, clientY } = event
        setPosition({ x: clientX, y: clientY })
      }
  
      if(enabled){
        window.addEventListener('pointermove', handleMove)
      }
  
      return () => {
        window.removeEventListener('pointermove', handleMove)
      }
  
    }, [enabled])
  
    return (
      <main>
      <div style={{
        display: `${view ? 'flex' : 'none'}`,
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0,0.5)',
        border: '1px solid white',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 50,
        height: 50,
        transform: `translate(${position.x}px, ${position.y}px)`
      }} />
      <button onClick={activeMove}>
        {enabled ? 'desactivar' : 'activar'} seguir puntero
      </button>
      </main>
    )
  }
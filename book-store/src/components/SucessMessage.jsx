import React, { useEffect, useState } from 'react'
import "./styles/SucessMessage.css"

function SucessMessage({message}) {

    const [fade, setFade] = useState("")

    useEffect (() => {
        setTimeout(() => {
            setFade('animate__zoomOut')
        }, 5000)
    }, [])

  return (
    <div className={`sucess-message-container animate__animated animate__zoomIn ${fade}`} >
        {message}
    </div>
  )
}

export default SucessMessage
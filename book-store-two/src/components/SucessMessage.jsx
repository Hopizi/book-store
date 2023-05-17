import React, { useEffect, useState } from 'react'
import "./styles/SucessMessage.css"

function SucessMessage({message, style}) {

    const [fade, setFade] = useState("")

    useEffect (() => {
        setTimeout(() => {
            setFade('animate__zoomOut')
        }, 5000)
    }, [])

  return (
    <div className={`sucess-message-container animate__animated animate__zoomIn ${fade} ${style}`} >
        {message}
    </div>
  )
}

export default SucessMessage
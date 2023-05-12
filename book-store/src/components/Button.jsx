import React from 'react'
import "./styles/Button.css"

function Button({btnTitle, style}) {
  return (
    <div className={`button-container ${style}`}>
        {btnTitle}
    </div>
  )
}

export default Button
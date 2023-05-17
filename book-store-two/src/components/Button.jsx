import React from 'react'
import "./styles/Button.css"

function Button({btnTitle, style, component, onClick}) {
  return (
    <div className={`button-container ${style}`} onClick={onClick}>
        {component}
        {btnTitle}
    </div>
  )
}

export default Button
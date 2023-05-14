import React from 'react'
import "./styles/Button.css"
import {Link} from "react-router-dom"

function EditButton({btnTitle, style, component, onClick, path}) {
  return (
    <div className={`button-container ${style}`} onClick={onClick}>
        {component}
        {btnTitle}
    </div>
  )
}

export default EditButton
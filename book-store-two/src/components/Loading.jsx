import React from 'react'
import "./styles/Loading.css"

function Loading({style}) {
  return (
    <div className={`loading-main-container ${style}`}>
        <div class="lds-dual-ring"></div>
    </div>
  )
}

export default Loading
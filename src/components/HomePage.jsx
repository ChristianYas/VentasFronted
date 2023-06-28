

import React from 'react'
import "./homePage.css"

let uriLogo = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYW-LrDw6XmSgueNAYK-MbI1sfp3Q9QTeFQp9nyXY&s"


function HomePage() {
  return (
    <div className='container-home'>

        <h1>Administrador de Ventas</h1>

        <img src={uriLogo} alt="" />

    </div>
  )
}

export default HomePage
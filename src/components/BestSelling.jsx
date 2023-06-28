import React, { useEffect, useState } from 'react'
import "./bestSelling.css"

function BestSelling() {

  const [bestSellings, setBestSellings] = useState()


  const TrCompoenent = ({ currentProduct }) => {

    let { idProduct, title, description, unitPrice, stock } = currentProduct["product"]

    let { idSale, quantitySold, date } = currentProduct["sale"]

    let total = unitPrice * quantitySold
    
    let roundTotal = total.toFixed(2)

    return (
      <tr>
        <th>{idSale}</th>
        <th>{title}</th>
        <th>{description}</th>
        <th>{unitPrice}</th>
        <th>{stock}</th>
        <th>{quantitySold}</th>
        <th>{roundTotal}$</th>
        <th>{date}</th>
      </tr>
    )
  }

  const getbestSellings = async () => {

    let res = await fetch("https://localhost:7076/bestSelling")

    let bestSellingsR = await res.json()

    setBestSellings(bestSellingsR)

  }

  useEffect(() => {

    getbestSellings()

  }, [])

  return (
    <div className='container-bestSellings'>

      <h2 className='title'>Articulos mas Vendidos</h2>

      <div className="container table">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>idVenta</th>
              <th>Título</th>
              <th>Descripcion</th>
              <th>Precio Unitario</th>
              <th>Cantidad del prodcto</th>
              <th>Cantidad vendida</th>
              <th>Total</th>
              <th>Fecha</th>
            </tr>
          </thead>
          <tbody>
            {
              bestSellings
                ? bestSellings.map((product, index) => <TrCompoenent key={index} currentProduct={product} />)
                : null
            }
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default BestSelling
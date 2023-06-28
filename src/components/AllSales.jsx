import React, { useEffect, useState } from 'react'
import "./allSales.css"

function AllSales() {

  const [allSales, setAllSales] = useState()

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

  const getAllSales = async () => {

    let res = await fetch("https://localhost:7076/allSales")

    let allSalesR = await res.json()

    setAllSales(allSalesR)

  }

  useEffect(() => {

    getAllSales()

  }, [])

  return (
    <div className='container-allSales'>

      <h2 className='title'>Ventas Globales</h2>

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
              allSales
                ? allSales.map((product, index) => <TrCompoenent key={index} currentProduct={product} />)
                : null
            }
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default AllSales
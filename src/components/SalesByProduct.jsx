import React, { useEffect, useState } from 'react'
import "./salesByProduct.css"

const initialStateProducts = { title: "", description: "", unitPrice: "", date: "", quantity: "" }

function SalesByProduct() {

  const [titles, setTitles] = useState()
  const [products, setProducts] = useState()
  const [amountSales, setAmountSales] = useState(0)
  const [totalSale, setTotalSale] = useState()

  const TrCompoenent = ({ currentProduct }) => {

    let { title, description, unitPrice, date, quantity } = currentProduct

    let total = unitPrice * quantity
    
    let roundTotal = total.toFixed(2)

    return (
      <tr>
        <td>{title}</td>
        <td>{unitPrice}</td>
        <td>{quantity}</td>
        <td>{roundTotal}$</td>
        <td>{date}</td>
      </tr>
    )
  }

  const getTitleProduts = async () => {

    let res = await fetch("https://localhost:7076/titles")

    let titlesR = await res.json()

    setTitles(titlesR)

  }

  const handlerChangeSelect = async (e) => {

    let total = 0, totalSaleI = 0

    let productName = e.target.value

    const encodedProductName = encodeURIComponent(productName)

    let res = await fetch(`https://localhost:7076/salesByProduct/${encodedProductName}`)

    let sales = await res.json()

    sales.map(sale => total += sale.quantity)

    setAmountSales(total)

    setProducts(sales)
  }

  useEffect(() => {

    getTitleProduts()

  }, [])

  return (
    <div className='container-sales'>

      <h2 className='title'>Ventas por Articulo</h2>

      <div className="select-container">
        <h3 className="select-title">Nombre del Producto</h3>
        <select placeholder='selecciona el producto' className="form-control" onChange={handlerChangeSelect}>
          {
            titles
              ? titles.map((title, index) => <option key={index} value={title}>{title}</option>)
              : null
          }
        </select>

        <div className="container table">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Título</th>
                <th>Precio Unitario</th>
                <th>Cantidad</th>
                <th>Total</th>
                <th>Fecha</th>
              </tr>
            </thead>
            <tbody>
              {
                products
                  ? products.map((product, index) => <TrCompoenent key={index} currentProduct={product} />)
                  : console.log("nothing")
              }
            </tbody>
          </table>
        </div>

        <p className='total'>Total de ventas de este producto {amountSales}</p>

      </div>

    </div>
  )
}

export default SalesByProduct
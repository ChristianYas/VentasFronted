import React, { useEffect, useState } from 'react'
import "./existProduct.css"

function ExistingProducts() { 

  const [products, setProducts] = useState()

  const TrCompoenent = ({ currentProduct }) => {

    let { idProduct, title, description, unitPrice, stock } = currentProduct

    return (
      <tr>
        <th>{idProduct}</th>
        <th>{title}</th>
        <th>{description}</th>
        <th>{unitPrice}</th>
        <th>{stock} <small className='small'>{stock < 100 ? "Comprar a Proveedor" : null}</small></th>
      </tr>
    )
  }

  const getAllProducts = async () => {

    let res = await fetch("https://localhost:7076/allProducts")

    let allProducts = await res.json()

    setProducts(allProducts)

  }

  useEffect(() => {

    getAllProducts()

  },[])

  return (
    <div className='container-allSales'>
      
      <h2 className='title'>Productos Existentes</h2>

      <div className="container table">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>idProduct</th>
              <th>Título</th>
              <th>Descripcion</th>
              <th>Precio Unitario</th>
              <th>Cantidad del prodcto</th>
            </tr>
          </thead>
          <tbody>
          {
              products
                ? products.map((product, index) => <TrCompoenent key={index} currentProduct={product} />)
                : null
            }
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default ExistingProducts
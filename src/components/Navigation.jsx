import React from 'react'
import "./navigation.css"
import { Link, createBrowserRouter, RouterProvider } from "react-router-dom"

import SalesByProduct from './SalesByProduct';
import AllSales from "./AllSales"
import BestSelling from "./BestSelling"
import ExistingProducts from "./ExistingProducts"

import articulos from "../images/articulos-a-la-venta.png"
import financiero from "../images/beneficio-financiero.png"
import ventas from "../images/ventas.png"
import bolsa from "../images/bolsa-de-la-compra.png"
import HomePage from './HomePage';


const router = createBrowserRouter([

    {
        path: "/",
        element: <HomePage />
    },
    {
        path: "/ventasPorArticulo",
        element: <SalesByProduct />
    },
    {
        path: "/ventasGlobales",
        element: <AllSales />
    },
    {
        path: "/articulosMasVendidos",
        element: <BestSelling />
    },
    {
        path: "/productosExistentes",
        element: <ExistingProducts />
    }
])

let uriLogo = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYW-LrDw6XmSgueNAYK-MbI1sfp3Q9QTeFQp9nyXY&s"

function Navigation() {
    return (
        <div className="dashboard">

            <div className="dashboard-menu">

                <a href="/">

                    <div className="dashboard-header">
                        <img src={uriLogo} />
                        <h3 className="dashboard-title">Administrador de Ventas</h3>
                    </div>
                </a>

                <div className="dashboard-menu-item item-1">
                    <div>  <a href="/ventasPorArticulo"><img src={articulos} alt="" className='icon' />Ventas por Artículo</a></div>
                </div>

                <div className="dashboard-menu-item item-2">
                    <a href="/ventasGlobales"><img src={ventas} alt="" className='icon' />  Ventas Globales</a>
                </div>

                <div className="dashboard-menu-item item-3">
                    <a href="/articulosMasVendidos"><img src={financiero} alt="" className='icon' /> Artículos más Vendidos</a>
                </div>

                <div className="dashboard-menu-item item-4">
                    <a href="/productosExistentes"> <img src={bolsa} alt="" className='icon' /> Productos Existentes</a>
                </div>

            </div>

            <div class="dashboard-content">
                <RouterProvider router={router} />
            </div>

        </div>

    )
}

export default Navigation
import React from 'react'
import ReactDOM from 'react-dom/client'
import Consumo from './Consumo.jsx'
import Produtos from './Produtos.jsx'
import Map from './Map.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Produtos/>
  },

  {
    path: "/",
    element: <Consumo/>
  },

  {
    path: "/",
    element: <Map/>
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

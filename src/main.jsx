import React from 'react'
import ReactDOM from 'react-dom/client'
import Consumo from './Consumo.jsx'
import Produtos from './Produtos.jsx'
import Map from './Map.jsx'
import App from './App.jsx'
import Grafico from './Grafico.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";


const router = createBrowserRouter([

  { path: "/",
    element: <App/>},

  {
    path: "/Produtos",
    element: <Produtos/>
  },

  {
    path: "/Consumo",
    element: <Consumo/>
  },

  {
    path: "/Map",
    element: <Map/>
  },

  {
    path: "/Grafico",
    element: <Grafico/>
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

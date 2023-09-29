import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider} from 'react-router-dom'
import { Login } from './components/Login'
import {router} from './router/index'


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} fallbackElement= {<Login/>}/>
  </React.StrictMode>
)


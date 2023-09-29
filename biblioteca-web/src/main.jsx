import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import { Login } from './components/Login'
import { Libros } from './components/Libros';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
    children: [
      {
        path: "/Libros",
        element: <Libros/>
      }
    ]
  },

]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)


import { createBrowserRouter } from "react-router-dom";
import { Login } from "../components/Login";
import { Libros } from "../components/Libros";
export const  router = createBrowserRouter([

        
    {
        path: "/",
        element: <Login/>,
    },
    {
        path: "/Login",
        element: <Login/>
    },
    {
        path: "/Libros",
        element: <Libros/>
    }
]);


import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayOut from './MainLayOut/MainLayOut.jsx';
import Home from './Components/Home/Home';
import AddProduct from './Components/AddProduct/AddProduct';
import UpdateProduct from './Components/UpdateProduct/UpdateProduct';
import Login from './Components/Login/Login';
import Registration from './Components/Registration/Registration';
import AuthProvider from './Providers/AuthProvider';
import Details from './Components/details/Details';
import ErrorPage from './Shared/Footer/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/addproduct",
        element: <AddProduct></AddProduct>
      },
      {
        path: "/updateproduct",
        element: <UpdateProduct></UpdateProduct>,
        // loader: ({params}) => fetch(`brand.json/${params.brand}`)
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/registration",
        element: <Registration></Registration>
      },
      {
        path : "/details/:brand",
        element: <Details></Details>,
        loader: ({params}) => fetch(`brand.json/${params.brand}`)
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)

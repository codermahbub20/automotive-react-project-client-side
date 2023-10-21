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
import ProductDetails from './Components/ProductDetails';
import AddCart from './Components/AddCart/AddCart';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

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
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
      },
      {
        path: "/updateproduct/:id",
        element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
        loader: ({params}) => fetch(`https://car-shop-server-side-bgtjvybrl-mahbub1.vercel.app/productById/${params.id}`)
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
        loader: ({params}) => fetch(`https://car-shop-server-side-bgtjvybrl-mahbub1.vercel.app/productByBrand/${params.brand}`),

      },
      {
        path: "/productDetails/:id",
        element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
        loader: ({params}) => fetch(`https://car-shop-server-side-bgtjvybrl-mahbub1.vercel.app/productById/${params.id}`)
      },
      {
        path: "/addCart",
        element: <PrivateRoute><AddCart></AddCart></PrivateRoute>,
        loader: () => fetch(`https://car-shop-server-side-bgtjvybrl-mahbub1.vercel.app/cart`)
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

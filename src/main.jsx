import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Root/Root';
import Home from './Pages/Home/Home';
import AddProduct from './Pages/AddProduct/AddProduct';
import MyCart from './Pages/MyCart/MyCart';
import Login from './Pages/Auth/Login/Login';
import Registration from './Pages/Auth/Registration/Registration';
import AuthProvider from './AuthProvider/AuthProvider';
import Product from './Components/Product';
import BrandProducts from './Components/BrandProducts/BrandProducts';
import UpdateProducts from './Components/UpdateProducts';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import FeaturedProduct from './Components/FeaturedProduct';
import ErrorPage from './Components/ErrorPage';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>
        
      },
      {
        path:'/addProduct',
        element:<PrivateRoute><AddProduct></AddProduct>
        </PrivateRoute>
      },
      {
        path:'/myCart',
        element:<PrivateRoute><MyCart></MyCart></PrivateRoute>,
        loader:()=>fetch('https://assignment-10-server-eight-theta.vercel.app/cart')
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/registration',
        element:<Registration></Registration>
      },
      {
        path:'/products/:name/:id',
        element:<PrivateRoute><Product></Product></PrivateRoute>,
        loader:({params})=> fetch(`https://assignment-10-server-eight-theta.vercel.app/addedProducts/${params.name}/${params.id}`)
      },
      {
        path:'/brand/:name',
        element:<BrandProducts></BrandProducts>,
        loader:({params}) => fetch(`https://assignment-10-server-eight-theta.vercel.app/addedProducts/${params.name}`)
        
      },
      {
        path:'/product/:id',
        element:<PrivateRoute><UpdateProducts></UpdateProducts></PrivateRoute>,
        loader:({params})=> fetch(`https://assignment-10-server-eight-theta.vercel.app/addedProducts/${params.name}/${params.id}`)
      },
      {
        path:'/products/:id',
        element:<PrivateRoute><FeaturedProduct></FeaturedProduct></PrivateRoute>,
        loader:({params})=> fetch(`https://assignment-10-server-eight-theta.vercel.app/featured/${params.id}`)

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

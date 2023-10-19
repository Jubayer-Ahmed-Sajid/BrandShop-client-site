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



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
        
      },
      {
        path:'/addProduct',
        element:<AddProduct></AddProduct>

      },
      {
        path:'/myCart',
        element:<MyCart></MyCart>
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
        path:'/featured/:id',
        element:<Product></Product>,
        loader:({params})=> fetch(`http://localhost:5000/featured/${params.id}`)
      },
      {
        path:'/brand/:name',
        element:<BrandProducts></BrandProducts>,
        loader:({params}) => fetch(`http://localhost:5000/addedProducts/${params.name}`)
        
      },
      {
        path:'product/:name/:id',
        element:<UpdateProducts></UpdateProducts>,
        loader:({params})=> fetch(`http://localhost:5000/addedProducts/${params.name}/${params.id}`)
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

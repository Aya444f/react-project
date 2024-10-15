import {createBrowserRouter,RouterProvider}from 'react-router-dom';
import React from 'react';
import Layout from './Components/Layout/Layout';
import Home from'./Components/Home/Home';
import Shop from './Components/Shop/Shop';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Cart from './Components/Cart/Cart';
import Product from './Components/Product';
import Cartsidebar from './Components/Cart/Cartsidebar';
import Checkout from './Components/Contact/Checkout';


let routes=createBrowserRouter([{
path:"",element:<Layout/>,children:[
{path:"Home",element:<Home/>},
{path:"Shop",element:<Shop/>},
{path:"Product",element:<Product/>},
{path:"About",element:<About/>},
{path:"Contact",element:<Contact/>},
{path:"Cart",element:<Cart/>},
{path:"Cartsidebar",element:<Cartsidebar/>},
{path:"Checkout",element:<Checkout/>},






]




}])






function App() {
  return (<div>
  <RouterProvider router={routes}></RouterProvider>
  
  
  
  
  </div>)
   
}

export default App;

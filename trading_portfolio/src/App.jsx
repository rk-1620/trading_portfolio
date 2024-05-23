import { useState } from "react";

import "./App.css";
import Navbar from "./componenets/Navbar";
import LandingPageMain from "./componenets/LandingPageMain";
import Login from "./componenets/Login";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from "./componenets/Home";


function App() {
  
  const router = createBrowserRouter([
    { path: '/',
     element:  <><Navbar/><LandingPageMain /></> },
    
     { path: '/login', 
    element: <><Navbar/><Login /></> },
    { path: '/', 
    element: <Home/> }
    
  ]);
  
  return (
    <>
    <RouterProvider router={router} />
    
    </>
    
  );
}

export default App;

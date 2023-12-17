import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
// import { BrowserRouter, } from "react-router-dom";
import {Routes, Route, } from 'react-router-dom'
import Footer from "./components/pages/Footer";
import Home  from "./components/pages/Home";
import Services from "./components/pages/Services";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Carousel from "../src/components/carousel/Carousel";


function App() {
  return (
    <>
    
    <Footer/>
    <Navbar/>
    <Carousel/>
      <Routes>  
        <Route path='/home' element={<Home/>}  ></Route>
        <Route path='/services' element={<Services/>}  ></Route>
        <Route path='/about' element={<About/>}  ></Route>
        <Route path='/contact' element={<Contact/>}  ></Route>
      </Routes>

    </>
  );
}

export default App;
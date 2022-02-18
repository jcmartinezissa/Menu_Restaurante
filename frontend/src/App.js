import "./App.css";
import Navbar from "./Navbar/Navbar";
import Login from "./Login/Login";
import Registro from "./Registro/Registro";
import Menus from "./Menus/Menus";
import Home from "./Home/Home";
import Footer from "./Footer/Footer";

//import React, { useEffect, useState } from "react";
import {Routes, Route } from 'react-router-dom';
import Dashboard from "./Dashboard/Dashboard";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>      
        <Route exact path='/home' element={<Home />}/>             
        <Route path="login" element={<Login />} />
        <Route path="registro" element={<Registro/>}/>
        <Route path="menu" element={<Menus/>}/>        
        <Route path="dashboard" element={<Dashboard/>}/>   
    
      </Routes>
      <Login/>
      <Footer />
    </div>
  );
}

export default App;

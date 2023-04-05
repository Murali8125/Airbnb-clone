import React from "react";
import "./Hero.css"
import grid from "/Images/photo-grid.png"
export default function Hero(){
   return (
     <div className="Hero">
        <img className="grid" src="Images/photo-grid.png" alt="grid"/>
        <h1 className="hero-header">Online Experinces</h1>
        <p className="hero-text">John unique interactive activities led by one of a kind hosts all without leaving home</p>
        
    </div>
   )
}



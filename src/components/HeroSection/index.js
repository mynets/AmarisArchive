import React from 'react';
import "./HeroSection.css"
import {Button} from "../buttonElements"
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from "gatsby"

function HeroSection(){
    return(
        <div className="hero-container">
            <h1>Amari's Archive</h1>
            <p>Things ends but memories last forever</p>
            <div className= "hero-btns">
               
                <Link className="btn btn-outline-primary" to="/images">Here are some of mine</Link>
                
            </div>
        </div>
    )
}

export default HeroSection
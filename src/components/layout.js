import React from "react"
import "./layout.css"
import Navbar from "./NavBar"
import Footer from "./Footer"

const Layout = ({ children }) => {
  
  return (
    <>
      <Navbar />
        <main>{children}</main>
     
    </>
  )
}


export default Layout

/** <Footer /> */
import React, { useEffect } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import { useHistory } from "react-router-dom";


const Layout = ({ children}) => {

  useEffect(()=>{
  })
  return (
    <>
      <Navbar history={useHistory} />
      <div style={{minHeight:'calc(100vh - 228px)'}}>
        {children}
      </div>
      <Footer />
    </>
  )
}

export default Layout
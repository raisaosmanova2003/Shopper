import React from 'react'
import Header from '../../layout/admin/Header/Header'
import { Outlet  } from "react-router-dom";
import Footer from "../../Layout/admin/Footer/Footer"
const AdminRoot = () => {
  return (
   <>
    <Header/>
    <Outlet/>
    <Footer/>
   </>
  )
}

export default AdminRoot

import React from 'react'
import Header from '../components/partials/Header'
import Footer from '../components/partials/Footer'
import { Outlet } from "react-router-dom";
import Breadcrumbs from '../components/ui/Breadcrumbs ';

const Layout = () => {
  return (
    <>
    <Header />
    <Breadcrumbs />
    {<Outlet />}    
    <Footer />
    </>
  )
}

export default Layout

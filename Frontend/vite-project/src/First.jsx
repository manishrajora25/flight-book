import React from 'react'
import Header from './componets/Header'
import Footer from './componets/Footer'
import { Outlet } from 'react-router-dom'


const First = () => {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />

    </>
  )
}

export default First
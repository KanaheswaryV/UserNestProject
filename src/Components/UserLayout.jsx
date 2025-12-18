import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'

const UserLayout = () => {
  return (
    <>
    <Header />
    <div style={{ display: "flex" }}>
    <Sidebar />
    <div style={{ marginLeft: "220px", width: "100%" }}>
          <Outlet />  {/* User, UserDetails, EditUser load here */}
    </div>
    </div>
    <Footer />
    </>

  )
}

export default UserLayout

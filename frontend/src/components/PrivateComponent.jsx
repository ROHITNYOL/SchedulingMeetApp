import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function PrivateComponent() {

    const auth = localStorage.getItem('user');





  return (
    <div>
    {auth? <Outlet/> :<Navigate to ="/Signup"/>}
    </div>
  )
}

export default PrivateComponent;
import React from 'react'
import {  NavLink, Outlet } from 'react-router-dom'
import { useAuth } from '../store/auth'


const Adminlayout = () => {
  const user=useAuth();
  console.log(user)
    
  return (
    <>
    <ul className='d-flex gap-5'>
        <li >
        <NavLink to={'/admin/users'}>Users</NavLink>
        
        </li>

        <li >
        <NavLink to={'/admin/contact'}>Contact</NavLink>
        </li>
    </ul>
    
   <Outlet/>
    </>
  )
}

export default Adminlayout
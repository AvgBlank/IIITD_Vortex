import React from 'react'
import NavbarAdmin from './components/NavbarAdmin';
import Dashboard from './components/Dashboard';

const page = () => {
  return (
    <div>
        <NavbarAdmin /> 
        <Dashboard/>
    </div>
  )
}

export default page
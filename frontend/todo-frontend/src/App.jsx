import { useState } from 'react'
import './App.css'
import Auth from './components/Auth'
import UserDashboard from './pages/UserDashboard'
import NavBar from './components/NavBar'
import { Outlet } from 'react-router-dom'

function App() {


  return (

    <Auth>
      <NavBar />
      <Outlet />

    </Auth>

  )
}

export default App

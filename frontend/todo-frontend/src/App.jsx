import { useState } from 'react'
import './App.css'
import Auth from './components/Auth'
import UserDashboard from './pages/UserDashboard'
import NavBar from './components/NavBar'

function App() {


  return (

    <Auth>
      <NavBar />
      <UserDashboard />

    </Auth>

  )
}

export default App

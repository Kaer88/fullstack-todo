import { useState } from 'react'
import './App.css'
import Auth from './components/Auth'
import UserDashboard from './pages/UserDashboard'

function App() {


  return (

    <Auth>

      <UserDashboard />
    
    </Auth>

  )
}

export default App

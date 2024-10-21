import React from 'react'
import Login from './pages/Login'
import { Routes,Route } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'
import Home from './pages/Home'
function App() {
  return (
    <>
    <Routes>
      <Route path='/login' element = { <Login/>}/>
      <Route path='/' element = {<ProtectedRoute Component = {<Home/>}/>}/>
      {/* <Route path = '/' element = {<Home//> */}
    </Routes>
   
    </>
  )
}

export default App
import React, { useEffect } from 'react'
import LoginScreen from './screens/login/LoginScreen'
import RegisterScreen from './screens/register/RegisterScreen'
import HomeScreen from './screens/home/HomeScreen'
import { verificarToken } from './fetching/auth.fetching'
import { Route, Routes, useNavigate } from 'react-router-dom'

const RouterApp = () => {
  const navigate = useNavigate()
  useEffect(()=>{
    verificarToken()
    .then(resultado =>{
      if(resultado.status == 200){
        navigate('/home')
      }
      else{
        navigate('/login')
      }
    })
  },
  []
  )
  
      
  return (
    
      <Routes>
        <Route path='/login' element={<LoginScreen/>}/>
        <Route path='/register' element={<RegisterScreen/>}/>
        <Route path='/' element={<LoginScreen/>}/>
        <Route path='/' element={<HomeScreen/>}/>
      </Routes>
    
  )
}

export default RouterApp

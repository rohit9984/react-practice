import { useState } from 'react'
import React from 'react'

import './App.css'
import Users from './User'

function App() {

  const users = [
    {
    name: 'Rohit',
    email: 'rohit36@gmail.com',
    contact: "9984774750"
  },

  {
    name: 'Mohit',
    email: 'mohit36@gmail.com',
    contact: "8984774750"

  },

   {
    name: 'Sohit',
    email: 'sohit36@gmail.com',
    contact: "7984774750"

  }

  
  ]
 

  return (
    <div className="app">
      <h1>Reuse Component </h1>
      {
      
      users.map((item, i)=>
      <Users data ={item}/>
      
      )
    }




    </div>
   
  )
}

export default App

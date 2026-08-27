import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import User from './User'
import Members from './Members'

function App() {

  function getData(){
    alert("Hello form App");
  }

  return (
    <div>
      <User data = {getData} />

      <div style={{float: 'right'}}>
        <Members data = {getData} />
      </div>
    </div>
    
      
  )
}

export default App

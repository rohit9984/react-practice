import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import React from 'react'
import User from './User'



function App() {

const [name, setName] = React.useState("Anil");
 

  return (
    <div>

      <h1>Hello APP</h1>
       <User name = {name} />
       <button onClick ={()=>setName("RAHUL") }>Update Name</button>
    </div>
   
  )
}

export default App

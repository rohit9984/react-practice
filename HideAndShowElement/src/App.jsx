import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import React, { useState } from 'react'

function App() {
  const [status, setStatus] = React.useState(true)

  return (
    <div className="App">
      {
      status? <h1>Hello World !</h1>: <h2>Hide Raja </h2>
}
      {/* <button onClick ={()=>setStatus(false)}>Hide</button>
      <button onClick={()=> setStatus(true)}>Show</button> */}

      <button onClick={()=> setStatus(!status)}>Togal</button>

    </div>
    
  );
}

export default App;

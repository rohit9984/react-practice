import React, { useState } from 'react'
import './App.css'

function App() {

  const[data, setState] = useState("Rahul");
  
  return (
    <div>
      <h1>Hello Raja {data}</h1>
      <button onClick={()=>{setState("Mohan")}}>Update data</button>
    </div>
  
  )
}

export default App

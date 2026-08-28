import React,{ useState } from 'react'

import './App.css'

function App() {
  let [val, setVal] = useState("")
  let [item, setItem] = useState("")
 
  return (
    <div className="App">
     <h1>Controlled Component</h1>
     <input type="text" defaultValue = "000" onChange = {(e) => setVal(e.target.value)} />

     <input type="text" value = {item} onChange = {(e) => setItem(e.target.value)} />
     



     <h1>{val}</h1>
     <h3>{item}</h3>

    </div>

  )
}

export default App

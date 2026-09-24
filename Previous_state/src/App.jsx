import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  function updateCounter(){

    let rand = Math.floor(Math.random()*10)
     
    setCount((pre) => {
      console.warn(pre);
      if(pre<5){
        alert("low value")
      }
      else{

      }
      return rand;

    });
  }

  return (
    <div className="app">

      <h1>{count}</h1>

      <button onClick={updateCounter}>Click Me to Update Counter</button>

    </div>
   
  )
}

export default App

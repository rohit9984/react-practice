import { useState } from 'react'

import './App.css'

function App() {


  return (
    <div>
      <h1>HOC</h1>
     <HOC cmp ={Counter}/>
      
    </div>
    
  )

}
function HOC(props){
  return(
    <div>
      <h2 style={{backgroundColor: "red"}}><props.cmp/></h2>
    </div>
  )
}

function Counter()
{
  const [count, setCount] = useState(0)
  return(
    <div>
      <h3>{count}</h3>
      <button onClick = {()=>setCount(count + 1)}>Update</button>

    </div>
  )
}

export default App

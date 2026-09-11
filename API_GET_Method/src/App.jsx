import './App.css'
import React, {useEffect, useState } from 'react'

function App() {
  const [data, setData] = useState([])
 useEffect(() => {


  fetch("https://jsonplaceholder.typicode.com/users").then((result) =>{
    result.json().then((resp) =>{

      console.warn("result", resp)
      setData(resp)
    })
  })


 },[])

 console.warn(data)
  

  return (
   <div className="app">
    <h1>GET API</h1>

    <table border={1}>
      <tr>
        <td>ID</td>
        <td>NAME</td>
        <td>Email</td>
        <td>Mobile</td>
        
      </tr>
      {data.map((item)=>
      <tr>
        <td>{item.id}</td>
         <td>{item.name}</td>
          <td>{item.email}</td>
           <td>{item.phone}</td>
        
        
      </tr>
      )
    }
    </table>

   </div>
  )
}

export default App

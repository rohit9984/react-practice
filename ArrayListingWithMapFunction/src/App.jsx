import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const name = ["Rohit", "Rahul", "Amresh", "Sanjeet"];

  const details = [
    {
    name: "Rohit",
    rollNo: 249084,   
    email: "rohit@gmail.com"
  },
      {
    name: "mohit",
    rollNo: 249085,   
    email: "mohit@gmail.com"
  },

      {
    name: "kohit",
    rollNo: 249086,   
    email: "kohit@gmail.com"
  },

      {
    name: "tohit",
    rollNo: 249089,   
    email: "tohit@gmail.com"
  },


]




 

  return (
    <div className="App">
      <h1> Array Listing with Map Function </h1>

      <table border="1">
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>RollNo</td>
        </tr>


      {details.map((item) => 
      <tr>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.rollNo}</td>


      </tr>
     
      
    
)}
</table>

 

    </div>
   
  )
}

export default App

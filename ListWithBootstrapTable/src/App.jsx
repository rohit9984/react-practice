import React from 'react'
import './App.css'
import {Table} from 'react-bootstrap'


function App() {
  // const name = ["Rohit", "Rahul", "Amresh", "Sanjeet"];

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

      <Table striped variant='dark'>
        <tbody>
          
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>RollNo</td>
        </tr>


      {
      details.map((item , i) => 

        item.rollNo === 249086?
      <tr key = {i}>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.rollNo}</td>


      </tr>:null
     
      
    
)}
</tbody>
</Table>

 

    </div>
   
  )
}

export default App;

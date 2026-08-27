import { useState } from 'react'
import './App.css'
import {Table} from 'react-bootstrap';




function App() {
  const users = [
    { name: 'Anil', email: 'anil@test.com', address: [
      {Hn: "10", city: 'Noida East', country: 'India'},
      {Hn: "11", city: 'Noida West', country: 'India'},
      {Hn: "12", city: 'Noida North', country: 'India'},
      {Hn: "13", city: 'Noida South', country: 'India'}
    ]

    },


     { name: 'Rohi', email: 'rohit@test.com', address: [
      {Hn: "14", city: 'Delhi', country: 'India'},
      {Hn: "15", city: 'Uttar Pradesh', country: 'India'},
      {Hn: "16", city: 'Haryana', country: 'India'},
      {Hn: "17", city: 'Kanpur', country: 'India'}
    ]

    },


       { name: 'Rahul', email: 'Rahul@test.com', address: [
      {Hn: "27", city: 'Lucknow', country: 'India'},
      {Hn: "37", city: 'Ludhiyan', country: 'India'},
      {Hn: "42", city: 'Panjab', country: 'India'},
      {Hn: "28", city: 'Nasik', country: 'India'}
    ]

    }

  ]

  return (
    <div className="App">
      <Table  striped bordered hover variant="dark">
        <tbody>
          <tr>
            <td>S.N</td>
            <td>Name</td>
            <td>Email</td>
            <td>Address</td>
          </tr>

          {

          users.map((item, i)=>

          <tr key={i+1}>
            <td>{i}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.address.map((data) =>
            <tr>
              <Table variant="dark" striped>
                <tbody>
                <tr>
              <td>{data.Hn}</td>
              <td>{data.city}</td>
              <td>{data.country}</td>
              </tr>
              </tbody>
              </Table>
            </tr>
             )}</td>
          </tr>
          
          
          
          )
        }
        </tbody>
      </Table>

    </div>
  
  )
}

export default App;

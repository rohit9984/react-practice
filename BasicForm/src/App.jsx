import './App.css'
import React, {useState} from 'react'

function App() {

  const [name,setName] = useState("");
  const [tnc, setTnc] = useState(false);
  const [interest, setInterest] = useState("");
function getFormData(e)
{

  console.warn(name, tnc, interest)
  e.preventDefault()
}


  return (
    <div className="App">
      <h1>Handle Form in React</h1>
      <form action="" onSubmit={getFormData}>
        <input type="text" placeholder = "enter name" onChange={(e) => setName(e.target.value)} />
        <br />
        <br />
        <select name="" id="" onChange = {(e) => setInterest(e.target.value)}>
          <option value="Select Option">Select Option</option>
          <option value="Marvel">Marvel</option>
          <option value="DC">DC</option>
          <option value="Damer">Damer</option>
        </select>
        <br />  
        <br />
        <input type="checkbox" onChange = {(e) => setTnc(e.target.checked)}/> <span>Accept Term And Conditions</span>
        <br /><br />
        <button type='submit'>Submit</button>
        

      </form>
    </div>

   
  )
}

export default App

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


function JustFunction(){

  const x = "myclass";

  const  myfun = () => {  
    alert("Hello camelCash");

  }

  const myStyle = {
    color: "red",
    fontSize: "20px",
    backgrounColor: "lightyellow"

  }


  
  return(
    <div>
      <h1 style={myStyle}>Hello This is a main.jsx Component </h1>

      <h2 className= {x}>My name is Rohit!</h2>

       <button onClick={myfun}>Hello</button>
    </div>
  
  )
}


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <JustFunction />
    <App />
  </StrictMode>,
)

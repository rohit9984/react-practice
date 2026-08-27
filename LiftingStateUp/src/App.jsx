import React,{props} from 'react'
import Reciver from './Reciver'
import './App.css'

function App() {
  function parentAlert(data){
    alert(data)
  }

  

  return (
    <>
    <h1>Lifting State Up</h1>
    <Reciver alert = {parentAlert}/>
    

    </>
  );
}

export default App;

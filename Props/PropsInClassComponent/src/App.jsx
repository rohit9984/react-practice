import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Student from './Student'
import React from 'react'

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      name: "Rohit"
    }
  }
  

 render(){

   return (

    <div className= "App">
      <h1>Props !</h1>
      <Student name = {this.state.name} email = "maurya@9984.gmail.com" />


      <button onClick={()=> this.setState({name: "Mohan"})}> Update Name </button>
    </div>
    
   
  );

 }
}

export default App;

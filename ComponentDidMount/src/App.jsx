import './App.css'
import React, { useState } from 'react'

class App extends React.Component{


  constructor(){

    super();
    this.state = {
      name: "Rohit"
    }

   
  }


  componentDidMount(){

    console.log("componentDidMount");
  }

  

  render(){
    console.log("render");

  return (
    <div>

      <h1>Comonent Did Mount {this.state.name}</h1>
      <button onClick={() => this.setState({name: "Maurya"})}>Update Name</button>




    </div>
  )

  
    }
  
    
  

}

export default App;

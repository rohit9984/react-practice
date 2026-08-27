
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import React from 'react'

  class App extends React.Component{
    constructor(){

      super();

      this.state = {
        data: "Anil"
      }

    }
  



render() {

  return (
    

    <h1>Hello {this.state.data}</h1>
   
  )
};

}


export default App;

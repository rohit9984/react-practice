import React from 'react'
import './App.css'
class App extends React.Component {


  constructor(){
    super();
    console.warn("constructor")
    this.state ={
      count: 0
    }


  }


  componentDidUpdate(preProps, preState, snapshot)
  {
    console.warn("ComponentDidUpdate", preState.count, this.state.count);

    if(this.state.count < 10){
    
    this.setState({count:this.state.count + 1})

    }
  }


render() {

  console.warn("render")
  return (
    <div>
      <h1>Component Did Update</h1>
      <h2>{this.state.count}</h2>

      <button onClick={() => this.setState({count: this.state.count + 1})}>Update Name</button>
    </div>
    
  )
}
}


export default App;

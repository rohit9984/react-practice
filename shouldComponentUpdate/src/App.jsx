import './App.css'
import React from 'react'

 class App extends React.Component {
  constructor(){
    super();

    this.state ={
      count: 0
    }

  }
  
  shouldComponentUpdate(){
    console.warn("shouldComponentUpdate", this.state.count);
    if(this.state.count<5 && this.state.count>0)
    {
      return true;
    }


  }


  render(){

  return (
    <div className="App">

      <h1>Shoud Component Update {this.state.count}</h1>


      <button
  onClick={() =>
    this.setState({
      count: this.state.count + 1
    })
  }
>
  Update Counter
</button>



    </div>
    
  )
}
}

export default App

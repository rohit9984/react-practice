import './App.css'
import React, {useRef} from 'react'

function App() {
  const inputRef = useRef(null)
  function handleInput(){
    console.warn("Function call")
    // inputRef.current.value = "Hello ';"
    // inputRef.current.focus();
    // inputRef.current.style.color = "red"
    inputRef.current.style.display = "none"
  }
  

  return (
    <div className="App">
      <input type="text" ref={inputRef} />
      <button onClick={handleInput}>Handle Input</button>

    </div>
  );
}

export default App;

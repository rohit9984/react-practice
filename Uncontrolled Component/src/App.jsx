import React, { useRef } from "react";

function App() {

  let inputRef = useRef(null)
  function submitForm(e)
  {
    e.preventDefault()
    console.warn("input field 1 value : ", inputRef.current.value)
  }




  return (
    <div>
      <h1>Uncontrolled Component</h1>
      <form onSubmit={submitForm}>
      <input type="text" ref={inputRef} /> <br /> <br />
      <input type="text" /> <br /> <br />

      <button>Submit </button>
      </form>
    </div>
  );
}

export default App;

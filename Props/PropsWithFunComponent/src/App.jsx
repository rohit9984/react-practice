import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Student from "./Student";

function App() {
  const [name, setName] = useState("Anil");
  return (
    <div>
      <h1>Props in React :</h1>

      {/* <Student name={" Anil"} email = " anil@gmail.com" other = {{address: "Gonda", mobile: "9984"}}/>
      <Student name={" Rohit"} email = " rohit@2490865.gmail.com"  other = {{address: "Balrampur", mobile: "9552"}}/>
      <Student name={" Mohit"} email = " mohit@2490865.gmail.com" other = {{address: "Basti", mobile: "7747"}}/> */}
      
      <Student name = {name}/>

      <button
        onClick={() => {
          setName("Sidhu");
        }}
      >
        Update Value
      </button>
    </div>
  );
}

export default App;

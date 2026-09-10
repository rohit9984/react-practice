import {Link, Route, Routes } from "react-router-dom"; 


import { Home } from "./Home";
import { About } from "./About";
import { Nav } from "./Nav";


import "./App.css";

function App() {
  return (
    <div className="app">
      <Nav/>
      {/* <Home/>
      <About/> */}
      


        <Routes>
      

          {/* <Route path="/" exact ={true} exeselement={<Home />} /> */}
             <Route path="/" element={<Home />} />
          
                  

          <Route path="/about" element={<About/>} />

          
        </Routes>
      
    </div>
  );
}





export default App;

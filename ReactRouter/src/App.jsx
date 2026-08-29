import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './component/Home'
import About from './component/About'


function App() {
  

  return (
   
    <div>
      <BrowserRouter>
      <Routes>
 <Route path ="/" element = {<Home/>}/>
 <Route path ="/about" element = {<About/>}/>
 

      </Routes>
     
      </BrowserRouter>
      
    </div>
  );
}

export default App;

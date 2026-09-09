import { useState } from 'react'

import foodimage from './assets/image.png'
import './App.css'

function App(){

  const imageStyle = {
    height: "85px",
    width: "85px",
  }

  return (
    <>
   <img src= {foodimage} style = {imageStyle} alt="Food" />     
    </>
  )
}

export default App;

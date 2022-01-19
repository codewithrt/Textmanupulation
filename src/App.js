
import './App.css';
import Navbar from './My components/Navbar';
import ToUtils from './My components/ToUtils';
import { useState } from "react";
import Alert from './My components/Alert';
import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";

import About from './My components/About'

function App() {
  const [mode, setmode] = useState("light")
  const darkchng = () => {

    if (mode === "light") {
      setmode("dark")
      document.body.style.backgroundColor = "#0c1a65"
      alerty("success", "You have sucessfuly enabled dark mode")
    }
    else if (mode === "dark") {
      setmode("light")
      document.body.style.backgroundColor = "white";
      alerty("success", "You have sucessfuly enabled light mode")
    }
  }
  const [alert, setalert] = useState(null)

  const alerty = (type, message) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 1500);
  }

  
  return (
    <>
      <BrowserRouter>
        <Navbar mode={mode} darkchng={darkchng} />
        
        <Alert alert={alert}  />
        
        <Routes>
          <Route path = "/" element = {  <ToUtils mode={mode} />} />
          <Route path = "/.About" element = {<About/>} />
        </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;

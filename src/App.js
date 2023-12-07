import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";



export const userName =React.createContext();
export const userPassword =React.createContext();
export const userEmail =React.createContext();
export const userGender=React.createContext();

function App() {
  const [alert, setAlert] = useState("");
  const setAlertMsg = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  
  return (
    <BrowserRouter>
    <>
       
      <Navbar title="Text Converter" about="About" />
         <Alert alert={alert} /> 
        <Routes>
        <Route path="/" element={<Form setAlertMsg={setAlertMsg} heading="enter your text here"/>} />
          <Route path="/" element={<Form/>} /> 
         <Route path="/about" element={<About />} />
   </Routes>
        

       
      </>
    </BrowserRouter>
   
      
     
    
        
  );
}

export default App;

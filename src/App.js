import React, { useState } from 'react'
import './App.css';
import TextUtils from './components/TextUtils';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
function App() {
  const [darkMode, setDarkMode] = useState("light");
  const [titleDarkMode, setTitleDarkMode] = useState("Enable Dark Mode");
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
      })
     setTimeout(()=>{
      setAlert(null)
     }, 2000) 
  }
  

  const handleDarkMode = () => {
    if(darkMode === "light"){
      setDarkMode("dark");
      setTitleDarkMode("Disabled Dark Mode")
      document.body.style.backgroundColor = "#111111";
      document.getElementById("textFields").style.backgroundColor = "#1C1C1C";
      document.getElementById("textFields").style.color = "white";
      document.body.style.color = "white";
      showAlert("Dark Mode is enabled", "success");
      document.title = "Enable Dark Mode";
    }
    else{
      setDarkMode("light");
      setTitleDarkMode("Enabled Dark Mode")
      document.body.style.backgroundColor = "#FFFFFF";
      document.getElementById("textFields").style.backgroundColor = "#F7F7F7";
      document.getElementById("textFields").style.color = "black";
      document.body.style.color = "black";
      showAlert("Light Mode is enabled", "success");
      document.title = "Enable light Mode";
    }
  }
  return (
    <>
    <Navbar darkMode = {darkMode} titleDarkMode = {titleDarkMode} handleDarkMode = {handleDarkMode} title="textUtils" about="About Utils" />
    <Alert alert = {alert}/>
      <h2 className='text-center my-3'>Enter Your Text for Utilize</h2>
      <TextUtils   showAlert={showAlert} darkMode = {darkMode} />
    </>
  );
}

export default App;

import React, { useState } from 'react'
import FindReplace from './FindReplace';
const TextUtils = (props) => {

  const btnStyle = {
    background:`${props.darkMode}==='dark' ? "rgb(17, 17, 17)" : "#F7F7F7"`,
    color:`${props.darkMode}==='dark' ? "white" : "black"`
  }
  const style = {
    background:`${props.darkMode}==='dark' ? "#1C1C1Cs" : "#F7F7F7"`,
    color:`${props.darkMode}==='dark' ? "white" : "black"`,
    border: `solid 2px`,
    borderColor: `${props.darkMode}==='dark' ? "white" : "black"`,
    minHeight: "400px"
  }

    const handleUpClick = () => {
        const newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text has been  upper case", "success");
      }
     const handleOnChange = (event) => {
        console.log("on change") 
        setText(event.target.value)
        
     }
     const handleLwClick = () => {
      const lowerText = text.toLowerCase();
      setText(lowerText);
      props.showAlert("Text has been lower case", "success");
     }
     const handleClrClick = () => {
      setText("");
      props.showAlert("Text has been clear", "success");
     }
     const handletcClick = () => {
      let sentence = text.toLowerCase().split(/[ ,]+/);
      for(let i = 0; i<sentence.length; i++){
        sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1); 
      }
      setText(sentence.join(" "));
      props.showAlert("Text has been title case", "success");
     }

     const handleCopyText = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Text has been copied", "success");
     }
     const handleRSText = () => {
      let newText = text.split(" ").filter((elem)=> {return elem !== ""}).join(" ");
      setText(newText)
      props.showAlert("Extra Spaces has been removed", "success");
     }
    const [text, setText] = useState("");
    let NoOfSentence = 0;
    let charCounts = text.split("").length;
    if(text == null || text == ""){
      NoOfSentence = 0;
    }
    else{
      NoOfSentence = text.split(".").length;
    }
  return (
    <>
  
      <div className="container my-3">
        <textarea className="form-control" value ={text} onChange={handleOnChange} id="textFields" rows="8"></textarea>
        <button disabled = {text.length===0} className={`btn btn-${props.darkMode==='dark' ? "dark" : "light"} m-3`} onClick={handleUpClick}>Convert Uppercase</button>
        <button disabled = {text.length===0} className={`btn btn-${props.darkMode==='dark' ? "dark" : "light"} m-3`}  onClick={handleLwClick} >Convert LowerCase</button>
        <button disabled = {text.length===0} className={`btn btn-${props.darkMode==='dark' ? "dark" : "light"} m-3`}  onClick={handleClrClick} >Clear</button>
        <button disabled = {text.length===0} className={`btn btn-${props.darkMode==='dark' ? "dark" : "light"} m-3`}  onClick={handletcClick} >Title Case</button>
        <button disabled = {text.length===0} className={`btn btn-${props.darkMode==='dark' ? "dark" : "light"} m-3`}  onClick={handleCopyText} >Copy Text</button>
        <button disabled = {text.length===0} className={`btn btn-${props.darkMode==='dark' ? "dark" : "light"} m-3`}  onClick={handleRSText} >Remove Extra space</button>
        <FindReplace  textField = {text} showAlert = {props.showAlert} darkMode = {props.darkMode} setText = {setText}/>
        <h5 className='my-3'>{text.split(" ").filter((elem)=> { return elem.length !== 0}).length} words <br/> {charCounts} Characters
        <br/> {NoOfSentence} Sentence
        </h5>
        <p className='my-3 p-5' style={style}>{text}</p>
        </div> 
    </>
  )
}

export default TextUtils
import React, { useState } from 'react'
import $ from 'jquery';

const FindReplace = (props) => {
  const handleReplace = () => {
    setFind(document.getElementById("Find").value);
    setReplace(document.getElementById("Replace").value); 
    let newText = props.textField.replace(find, replace);
    props.setText(newText)
    props.showAlert("Text has been Replaced", "success");
    setModal("modal")
  }
  const [modal, setModal] = useState("");
  const [find, setFind] = useState("");
  const [replace, setReplace] = useState("");
  return (
    <>
<button type="button" disabled = {props.textField.length===0} className={`btn btn-${props.darkMode==='dark' ? "dark" : "light"} m-3`}  data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">Find and Replace</button>
<div className={`modal fade `} id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className={`modal-dialog text-dark`}>
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Find And Replace</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <form>
          <div className="mb-3">
            <label htmlFor="recipient-name" className="col-form-label">Find</label>
            <input type="text" className="form-control" id="Find" />
          </div>
          <div className="mb-3">
            <label htmlFor="message-text" className="col-form-label">Replace</label>
            <input type="text" className="form-control" id = "Replace"/>
          </div>
        </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" id = "btn-replaced" data-bs-dismiss={modal} onClick={handleReplace}>Replaced</button>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default FindReplace
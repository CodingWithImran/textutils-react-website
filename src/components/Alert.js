import React from 'react'

const Alert = (props) => {
  const capitalize = (word) =>{
    let newText = word.toLowerCase();
    return (newText.charAt(0).toUpperCase() + newText.slice(1));
  }
  return (
    <div className='' style={{height:"50px"}}>
{props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade container show`} role="alert">
      <strong>{capitalize(props.alert.type)}! </strong> {props.alert.msg}
  </div>}
  </div>
  )
}

export default Alert
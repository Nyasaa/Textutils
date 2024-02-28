import React, {useState} from 'react'


export default function textForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    useText(newText);
    props.showAlert("Changed to Uppercase", "success");
  }
  const handleOnChange = (event) => {
    useText(event.target.value);
  }
  const [text, useText] = useState('')

  return (
    <>
    <div className='container' style={{color: props.mode==='dark'? 'white': 'black'}}>
      <div className="mb-3 py-2">
     <h1>{props.heading}</h1>
     <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'? '#cdcdcd': 'white'}} id="myBox" rows="5"></textarea>
    </div>
    <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
    </div>
    <div className="container" style={{color: props.mode==='dark'? 'white': 'black'}}>
      <h1>Your text summary</h1>
      <p>{text.split("").length} words and {text.length} characters </p>
      <p>{0.008 * text.split("").length} minutes to read</p>
    </div>
    </>
    
    
  )
}

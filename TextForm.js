import React, {useState} from 'react'

export default function TextForm(props) {
  const handelUpClick =()=>
  {console.log("Uppercase was clicked"+ text);
  let newText = text.toUpperCase();
  setText(newText)
     }  
     const handelOnChange =(event)=>
     {console.log("On Changed");
     setText(event.target.value); 
     }  
  const[text,setText] = useState('Enter the text here')
  return (
    <>
    <div className="container">
       <h1>{props.heading}</h1>
        <div className="mb-3">
               
                <textarea className="form-control" value={text} onChange={handelOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary"onClick={handelUpClick}>Convert to UpperCase</button>
    </div>
    <div className="container my-3" >
      <h1>Your Summary</h1>
      <p> {text.split(" ").length}Words and {text.length}Character </p>
      <p> {0.008 * text.split(" ").length}minutes to read </p>
      <h2>Preview</h2>
      <p>{text} </p>
    </div>
    </>
  )
}

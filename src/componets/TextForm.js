import React ,{useState} from 'react'

 
 
export default function TextForm(props) {

  const handleUpClick =()=>{
    console.log("Upper case was cliked");
    let newtext = text.toUpperCase();
    setText(newtext);
   }
   const handleLoClick =()=>{
    console.log("lover case was cliked");
    let newtext = text.toLowerCase();
    setText(newtext);
   }
   const handleClearClick =()=>{
    console.log(" ");
    let newtext = ' ';
    setText(newtext);
   }
   const handleonchnge =(event)=>{
    console.log("on change")
    setText(event.target.value);
   }
   
   function copyTextFromTextBox() {
    const textBox = document.getElementById("mybox");
    const text = textBox.value;
    navigator.clipboard.writeText(text);
  } 
  
   
  const [text, setText] = useState('Enter text here2');
  // setText("new text");
  return (
    <>
    <div className='container'>
       <h1>{props.heading}</h1>
    <div className="mb-3">
            <label for="mybox" class="form-label">Example Textarea</label>
            <textarea className="form-control" value= {text} onChange= {handleonchnge}id="mybox" rows="8"> </textarea>
    </div>
  <button className="btn btn-primery mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
  <button className="btn btn-primery mx-2" onClick={handleLoClick}>Convert to lovercase</button>
  <button className="btn btn-primery mx-2" onClick={handleClearClick}>Clear text</button>
  <button className="btn btn-primery mx-2" onClick={copyTextFromTextBox}>Copy  text</button>
  
  
    </div>


    <div className="container my-3">
      <h1>your text summry </h1>
      <p>{text.split(" ")} words and {text.length}charecters</p>
      <p>{0.008 * text.split(" ").length} Minutes Read </p>
      <h2>priew</h2>
      <p>{text}</p>
    </div>
    </>
  )
}

import React, {useState} from 'react';

const Form = (props) => {

    const[text, setText] = useState();

    const onChangeHandle = (event)=>{
        console.log("On Change.....!");
        setText(event.target.value);
    }
    const handleUpClick = ()=>{
      let  ntext = text.toUpperCase();
      setText(ntext);
      props.showAlert("The text has been coverted to upper case", "success");
    }
    const handleLowClick = ()=>{
        let ntext = text.toLowerCase();
        setText(ntext);
        props.showAlert("The text has been coverted to lower case", "success");
    }
    const handleClearClick = ()=>{
        let ntext = '';
        setText(ntext);
        props.showAlert("The text has been cleared", "success");
    }
    const handleExtraSpacesClick = ()=>{
        let ntext = text.split(/[  ]+/);
        setText(ntext.join(" "));
        props.showAlert("The extra spaces are removed", "success");
    }
    const handleCopyClick = ()=>{
        console.log("I am copy");
        var text = document.getElementById('mybox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("The text has been copied to clipboard", "success");
    }
  return (
    <>
        <div className='container' style ={{color : props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="form-group">
        <label htmlFor="mybox">Example Text Area</label>
        <textarea className="form-control" value={text} onChange={onChangeHandle} style ={{backgroundColor : props.mode ==='dark'?'grey':'white', color:props.mode==='dark'?'white':'#042743'}} id="mybox" rows="8"></textarea>
        </div>
        <button className='btn btn-primary mx-0 my-4' onClick={handleUpClick}>Convert to Upper Case</button>
        <button className='btn btn-primary mx-2' onClick={handleLowClick}>Convert to Lower Case</button>
        
        <button type="button" class="btn btn-primary mx-3" onClick={handleClearClick}>Clear Text</button>
        <button type="button" class="btn btn-primary mx-3" onClick={handleCopyClick}>Copy Text</button>
        <button type="button" class="btn btn-primary mx-3" onClick={handleExtraSpacesClick}>Remove Extra Spaces</button>
        </div>
        <div className='container my-3' style ={{color : props.mode==='dark'?'white':'#042743'}}>
            <h1>Your Text Summary</h1>
            {/* <p>{text.split(" ").length} words and {text.length} characters </p>
            <p>{0.008 * text.split(" ").length}Minute read</p> */}
            {/* <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 *text.split(" ").length}Minute read</p> */}
        </div>
    </>
  );
}

export default Form
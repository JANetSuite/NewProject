import React,{useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = () =>{
    let newText= text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!", "success");
    }

    const handleLowClick = () =>{
        let newText= text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!", "success");
        }

        const handleClick = () =>{
            let newText= '';
            setText(newText);
            props.showAlert("Text Cleared!", "success");
            }

            const handleCopy = () =>{
                var text= document.getElementById("myBox");
                text.select();
                navigator.clipboard.writeText(text.value);
                props.showAlert("Copied to clickboard!", "success");
                }
                
                const handleExtraSpaces = () =>{
                    let newText= text.split(/[ ]+/);
                    setText(newText.join(" "));
                    props.showAlert("Extra spaces removed!", "success");
                    }

    const handleOnChange = (event) =>{
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter text here');
  
    return (
        <>
        <div className="container">
            <h2>{props.heading}</h2>    
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
             </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-1" onClick={handleClick}>Clear text</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy} id="myBox">Copy text</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpaces} id="myBox">Remove Extra Spaces</button>
        </div>
        <div className="container my-3">
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
        </div>
        </>
    )
}

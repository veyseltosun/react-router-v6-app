import React from "react";
import ReactDOM from "react-dom";
import {useState} from "react"


const Modal = (props) => {
    const [name, setName] = useState("ui dimmer show modals visible active" );
  
    
    return ReactDOM.createPortal(
        <div className={name}>
            <div className="ui raised very padded text container segment">
                <h1 > I am modal !</h1>
                <button className="ui red button "  onClick={() => setName("ui modal")}>Close Me   <i className="close icon"></i></button> 
            </div>
        </div>,
        document.querySelector("#modal")
    )

}

export default Modal ;

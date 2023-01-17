import React from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";


const Contact = (props) => {
    
    
    let navigate = useNavigate();
  
        setTimeout( () => {
            navigate("/about")
        }, 2000)
   
  
    
    return (
        <div
            className="ui raised very padded text container segment"
            style={{ marginTop: "80px", }}
        >
            <h3 className="ui header"> Contact </h3>
            <p>Lorem ipsum sit amet dolar.</p>
        </div>
    )
}
export default Contact ;
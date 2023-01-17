import React,{useState} from "react";
import { useParams } from "react-router-dom";

const Card = (props) =>  {

    // const [userCard, setUserCard] =useState(null);
     
   const {user} = useParams()
       
  
 
        
    


    
        return (
            <div
                className="ui raised very padded text container segment"
                style={{ marginTop: "80px", }}
            >
                <h3 className="ui header">User:  {user.toUpperCase()}</h3>
                
            </div>
        )
    
}

export default Card;
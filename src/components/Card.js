import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { connect, useSelector, useDispatch } from "react-redux"
import { deleteCard, fethUser } from "../reducer/actions";


const Card = ({ cards, users }) => {

    const dispatch = useDispatch();
    const navigate = useNavigate(); 
       
    const { user } = useParams()

    let card = cards.find( card => card.title === user)
    const {title, body, id} = card
  
    const onButtonSubmit = () => {
       
        dispatch(deleteCard(id))
        navigate("/contact")
    }
    
    useEffect(() => {
        fethUser();
        dispatch(fethUser())
    },[])
   


  
    return (
        <div>
            {
                 <div
                        className="ui raised very padded text container segment"
                        style={{ marginTop: "80px", }}
                    >
                        <h3 className="ui header"> {title}</h3>
                        <p>{body} you click the user and you see the clicked user</p>
                        <button className="ui primary right floated button" onClick={onButtonSubmit}>Delete</button>

                    </div>
            }

        </div>

    )

}

const mapStateToProps = (state) => {
    const { cards, users } = state;

    console.log(users)

  
    return {
        cards: cards,
        users: users,
    }
}

// const mapDispatchToProps = (dispatch) => {
//         return {
//             deleteCard: (id) => {dispatch({type:"DELETE_CARD", id: id})}
//         }
// }



export default connect(mapStateToProps)(Card);
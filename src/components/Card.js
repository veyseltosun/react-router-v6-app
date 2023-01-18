import React from "react";
import { useParams } from "react-router-dom";

import { connect } from "react-redux"


const Card = ({ cards }) => {

    const { user } = useParams()


    console.log(cards)
    let card = cards.find( card => card.title === user)
    const {title, body} = card

    const onButtonClick = () => {
        let {id} = card;
        card.deleteCard(id)
    }



  
    return (
        <div>
            {
                 <div
                        className="ui raised very padded text container segment"
                        style={{ marginTop: "80px", }}
                    >
                        <h3 className="ui header"> {title}</h3>
                        <p>{body} you click the user and you see the clicked user</p>
                        <button className="ui primary right floated button" onClick={ onButtonClick}>Delete</button>

                    </div>
            }

        </div>

    )

}

const mapStateToProps = (state) => {
    const { cards } = state;

    console.log(cards)
    return {
        cards: cards
    }
}

const mapDispatchToProps = (dispatch) => {
        return {
            deleteCard: (id) => {dispatch({type:"DELETE_CARD", id: id})}
        }
}



export default connect(mapStateToProps, mapDispatchToProps)(Card);
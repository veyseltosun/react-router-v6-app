import React from "react";
import { useParams } from "react-router-dom";

import { connect } from "react-redux"


const Card = ({ cards }) => {

    const { user } = useParams()


    console.log(cards)










    let card = cards.find( card => card.title === user)
    return (
        <div>
            {
                 <div
                        className="ui raised very padded text container segment"
                        style={{ marginTop: "80px", }}
                    >
                        <h3 className="ui header"> {card.title}</h3>
                        <p>{card.body}</p>
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



export default connect(mapStateToProps)(Card);
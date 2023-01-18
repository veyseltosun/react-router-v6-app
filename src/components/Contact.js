import React from "react";
import { useLocation, useParams, useNavigate, Link } from "react-router-dom";
import Modal from "./Modal";
import { connect } from "react-redux";



const Contact = ({ cards }) => {



    let navigate = useNavigate();

    // setTimeout( () => {
    //     navigate("/about")
    // }, 2000)



    return (
        <div>
            <Modal />

            {cards.map((card) => {
                const { id, title, body } = card;
                return (
                    <div key={id}
                        className="ui raised very padded text container segment"
                        style={{ marginTop: "80px", }}
                    >
                        <Link to={"/"+title} className="ui header"> {title}</Link>
                        <p>{body}</p>
                    </div>

                )
            })}


        </div>
    )
}

const mapStateToProps = (state) => {
    const { cards } = state;

    return {
        cards: cards  // cards olarak kısaltabilirdik Ecma 6 ya göre aynı iki key value için biri yazılması yeterli.
    }
}
export default connect(mapStateToProps)(Contact);
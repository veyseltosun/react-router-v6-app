import React from "react";
import { useLocation, useParams, useNavigate, Link } from "react-router-dom";


const Contact = (props) => {


    let navigate = useNavigate();

    // setTimeout( () => {
    //     navigate("/about")
    // }, 2000)



    return (
        <div>

            <div
                className="ui raised very padded text container segment"
                style={{ marginTop: "80px", }}
            >
                <Link to="/alex" className="ui header"> Alex </Link>
                <p>Lorem ipsum sit amet dolar.</p>
            </div>
            <div
                className="ui raised very padded text container segment"
                style={{ marginTop: "80px", }}
            >
                <Link to="/willma" className="ui header"> Willma </Link>
                <p>Lorem ipsum sit amet dolar.</p>
            </div>

        </div>
    )
}
export default Contact;
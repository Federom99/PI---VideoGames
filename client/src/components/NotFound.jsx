import React from "react";
import image from "../images/error-404.jpg"
import "../styles/NotFound.css";



export default function NotFound() {

    return (
        <div>
            <div>
                <img className="notFound" src={image} alt='' />

            </div>
        </div>
    )
}
import React from "react";
import image from "../images/robot.png"
import "../styles/NotFoundVg.css";



export default function NotFound() {

    return (
        <div>
            <div>
                <img className="image" src={image} alt='' />

            </div>
        </div>
    )
}
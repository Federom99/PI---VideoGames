import React from "react";
import { NavLink } from "react-router-dom"; 
import '../styles/Card.css'  


export default function Card ({image, name, rating, genre, id, }){
    // console.log(genre)
    return(
    <div>
    <div className="cards2" >
    <div className="card" >
    <NavLink className={"NavLink"} to= {'/videogames/' + id}>
    <div>
    <img className="image2" src={image} alt='no se encontro' width="380px" height="250px"/>
    <h2 className="title2" >{name}</h2>
    <h6 className="genres2" >Genres: {genre.join(", ")} </h6>
    <h6 className="rat" >Rating: {rating } </h6>
    </div></NavLink>
    </div>
    </div>
    </div>
    )
    }
import React from "react";
import { Link } from "react-router-dom"; 
import '../styles/Card.css'  


export default function Card ({image, name, rating, genre, id}){
    return(
        <div  >

        <div >
            <div >
                <span></span>
                <div >
                <img className="card" src={image} alt='no se encontro' width="380px" height="250px"/>
                <h2 className="t">{name}</h2>
                <h6 className="heading">Genres: {genre + " "} </h6>
                <h6 className="heading">Rating: {rating + " "} </h6>
                <Link to={'/videogames/' + id}>
                <h3 className="details"> Details</h3>
                </Link>
            </div>
         </div>
        </div>

        </div>
    )
}










//  import React from "react";

// export default function Card({name, image, genre, genres, platform, platforms}){ 
    
  
//     return (
//         <div>   
//             <h2 >{name}</h2>                        
//             <img   src={image} alt="img not found" width = "400px" height="270px"/>
//             <h5  >GENEROS: {genres
//                         ? genres.map((p) => p.name + ", ")
//                         : genre.map((p) => p.name + ", ")}</h5>
       
//         </div>)
// }
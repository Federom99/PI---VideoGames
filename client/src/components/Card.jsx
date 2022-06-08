import React from "react";
import { Link } from "react-router-dom";   


export default function Card ({image, name, videoGame, genreType, id}){
    return(
        <div >

        <div >
            <div >
                <span></span>
                <div >
                <img className="card" src={image} alt='no se encontro' width="380px" height="250px"/>
                <h2>{name}</h2>
                <h6>Genres: </h6>
                <h4 className="hh44">{videoGame}</h4>
                <h6 className="infh6">Rating: </h6>
                <h5>{genreType}</h5>
                <Link to={'/videogames/' + id}>
                <h3> Details</h3>
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
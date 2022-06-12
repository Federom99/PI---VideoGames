import React from "react";
import { NavLink } from "react-router-dom"; 
import '../styles/Card.css'  


export default function Card ({image, name, rating, genre, id, }){
    return(
        <div  >

        <div className="cards2" >
            <div className="card" >
                <NavLink className={"NavLink"} to= {'/videogames/' + id}>
                <div  >
                <img className="image2" src={image} alt='no se encontro' width="380px" height="250px"/>
                <h2 className="title2" >{name}</h2>
                <h6 className="genres2" >Genres: {genre + " "} </h6>
                <h6 className="rat" >Rating: {rating } </h6>
                
               
            </div> </NavLink>
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
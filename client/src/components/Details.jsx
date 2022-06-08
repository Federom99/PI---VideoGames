







// import React from 'react';
// import { useParams } from "react-router-dom";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getDetails } from "../actions/index";
// import { Link } from "react-router-dom";

// function Details(){
//     // trae del Reducer-index-> CASE (GET_DETAILS_DOG) gamesDetail
//     const allDetails = useSelector((state) => state.getDetails);
//     //console.log(allDetails) 
//     const dispatch = useDispatch();
//     const { id } = useParams();
//     useEffect(() => {
//         dispatch(getDetails(id));
//       },[dispatch,id])

//       console.log(allDetails)
//     return (
//         <div>
//             {allDetails.length > 0 ? (
//             <div>
//                 <br /><br />
//                 <Link to='/home'><button>REGRESAR AL HOME</button></Link>
//                 <br /><br /><br />

//                 <h1 >{allDetails[0].name}</h1>
//                 <img src={allDetails[0].image} alt="img not found"/>
//                     {/* //fecha lanzamiento = released */}
//                     <h3 > LANZAMIENTO: {allDetails[0].released_date}</h3> 
//                     <h3 > RATING: {allDetails[0].rating}</h3>
//                     <h3 >DESCRIPCION: {allDetails[0].description
//                         ? allDetails[0].description
//                         : "NO POSEE DESCRIPCION"}</h3>
//                     <h3 >GENEROS: {allDetails[0].genres
//                         ? allDetails[0].genre.map((p) => p.name + ", ")
//                         : allDetails[0].genre.map((p) => p.name + ", ")}</h3> 

//                     <h3 >PLATAFORMAS: {Array.isArray(allDetails[0].plataform)
//                         ? allDetails[0].plataform.map((p) =>p.plataform.name + ",  ")
//                         : "Pc"}                       
                                                          
//                     </h3>
                  
//             </div>
//             ) : (
//                 <div>
//                     <h1>CARGANDO...</h1>                  
//                 </div>
//               )}
//         </div>
//     )
// } 

// export default Details;
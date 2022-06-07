import React from 'react';
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../actions/index";
import { Link } from "react-router-dom";

function Details(){
    // trae del Reducer-index-> CASE (GET_DETAILS_DOG) gamesDetail
    const allDetails = useSelector((state) => state.getDetails);
    //console.log(allDetails) 
    const dispatch = useDispatch();
    const { id } = useParams();
    useEffect(() => {
        dispatch(getDetails(id));
      },[dispatch,id])

      console.log(allDetails)
    return (
        <div>
            {allDetails.length > 0 ? (
            <div>
                <br /><br />
                <Link to='/home'><button>REGRESAR AL HOME</button></Link>
                <br /><br /><br />

                <h1 class="heading">{allDetails[0].name}</h1>
                <img className="card" src={allDetails[0].image} alt="img not found"/>
                    {/* //fecha lanzamiento = released */}
                    <h3 class="heading"> LANZAMIENTO: {allDetails[0].released_date}</h3> 
                    <h3 class="heading"> RATING: {allDetails[0].rating}</h3>
                    <h3 class="heading">DESCRIPCION: {allDetails[0].description
                        ? allDetails[0].description
                        : "NO POSEE DESCRIPCION"}</h3>
                    <h3 class="heading">GENEROS: {allDetails[0].genres
                        ? allDetails[0].genres.map((p) => p.name + ", ")
                        : allDetails[0].genre.map((p) => p.name + ", ")}</h3> 

                    <h3 class="heading">PLATAFORMAS: {Array.isArray(allDetails[0].plataform)
                        ? allDetails[0].plataform.map((p) =>p.plataform.name + ", LADRON ")
                        : "Pc"}                       
                                             {/* // "Action"} */}
                        {/* allDetails[0].platform.map((p) => p.name + ", ROBO ")                  */}
                    </h3>
                    {/* <h3 class="heading">PLATAFORMAS: {allDetails[0].platforms
                        ? allDetails[0].platform.map((p) => p + ", ")
                        : allDetails[0].platforms.map((p) => p + ", ")}</h3>  */}
                    {/* <h3>{allDetails[0].genre
                    ? allDetails[0].genre
                    : allDetails[0].genres?.map((p) => p.name + " ")}
                    </h3> */}
                    {/* <h3>{allDetails[0].platform
                        ? allDetails[0].platform
                        : allDetails[0].platforms?.map((p) => p.name + " ")}
                    </h3>               */}
            </div>
            ) : (
                <div>
                    <h1>CARGANDO...</h1>                  
                </div>
              )}
        </div>
    )
} 

export default Details;
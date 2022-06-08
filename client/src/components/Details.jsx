import React from "react";
import {connect} from 'react-redux';



function Details({Videogame}){

    return (
        <div >
            {
                Videogame && Videogame.map(e =>
                <div >
                    <div >
                        <h1>{e.name}</h1>
                        <img  src={e.image} alt='Imagen dañada'/>
                        <p>Rating:  {e.rating}</p>
                        <p>Released:  {e.release_date}</p>
                        <p > Genres: {e.genres.map((ele)=> <span >{ele.name}</span>)}</p> 
                        <p>Platforms:  {e.plataform.map((el) => <span>{el}</span>)}</p>
                        <p >Description:  {e.description}</p>
                        
                    </div>
                  
                </div>)
                    
            }
        </div>
    )
}

const mapStateToProps = (store) => {
    return {
        Videogame: store.id
    }
}

export default connect(mapStateToProps)(Details)
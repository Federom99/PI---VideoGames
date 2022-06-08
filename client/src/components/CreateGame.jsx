import React, {useState} from "react";
import { connect } from "react-redux";
import {postVideoGames} from '../actions';
import {useHistory} from 'react-router-dom'
import '../styles/CreateGameStyle.css'

function Create({postVideoGames}){   

    const [state, setState] = useState({
        name: '',
        release_date: 0,
        rating: 0,
        image: '',
        genre: [],
        plataform: [],
        description: ''
    })

    let myHistory = useHistory()

    function handleChange(e){
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
        
    }

    function handleRating(e){
        setState({
            ...state,
            rating: parseInt(e.target.value)
        })
    }
    function handleGenres(e){
        setState({
            ...state,
            // genre: [e.target.value]
            genre: state.genre.includes(e.target.value) ? state.genre.filter(el => el !== e.target.value) : state.genre.concat(e.target.value)
        })
        // console.log(state)
    }

    // async function handleSubmit(e){
    //     e.preventDefault()
    //     submitPost(state)
    //     await console.log(state)
    // }
    function handlePlatforms(e){
        setState({
            ...state,
            plataform: state.plataform.includes(e.target.value) ? state.plataform.filter(el => el !== e.target.value) : state.plataform.concat(e.target.value)
        })
        console.log(state)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(state.name == ''){
            return alert("Missing add the name" + " " + "(Falta agregar el nombre)")
        }
        if(state.release_date == ''){
            return alert("Missing add game release date" + " " + "(Falta agregar la fecha de lanzamiento de juego)")
        }
        if(state.rating == 0 || state.rating == '' || state.rating < 1 || state.rating > 5 || state.rating == NaN){
            return alert("The rating must be between 1 and 5" +  " " + "(El rating debe ser entre 1 y 5)")
        }
        if(state.image == ''){
            return alert("Missing add the URL of the image" + " " + "(Falta agregar el URL de la imagen)")
        }
        if(state.description == '' || state.description.length < 15){
            if(state.description == '') return alert("Missing add description" + " " + "(Falta agregar descripción)")
            if(state.description.length < 15) return alert("Description must be at least 15 characters" + " " + "(La descripción debe tener al menos 15 caracteres)")
        }
        if(state.genre == ''){
            return alert("Need to add genres" + " " + "(Faltan agregar generos)")
        }
        if(state.plataform == ''){
            return alert("Add platforms" + " " + "(Falta agregar plataformas)")
        }
        // const game = state
        await postVideoGames(state)
        console.log(state)
        myHistory.push("/home")
        alert("The game was created" + " " + "(Se creo el juego)")
    }

    return (
        <div  className="main">
            {/* <button className={s.btnVolver}><NavLink to='/app/home'>Volver</NavLink></button> */}
            <form onSubmit={(e)=>handleSubmit(e)}>
                
                <div className="main-content" >

                    <h3 className="name2"  >CREATE NEW VIDEOGAME</h3>
                    <br></br>

                    <div >
                        
                        <label>Name of the game: </label>
                        <br></br>
                        <input className="name" type="text" name="name" placeholder="..." onChange={(e)=>handleChange(e)} />
                    </div>

                    <div >
                        <label>Release: </label>
                        <br></br>
                        <input className="name" type="date" name="released"  onChange={(e)=>handleChange(e)} />
                    </div>


                    <div >
                        <label>Rating: </label>
                        <br></br>
                        <input  className="name"type="text" name="rating" placeholder="0-5" onChange={(e)=>handleRating(e)} />
                    </div>


                    <div >
                        <label>Image url: </label>
                        <br></br>
                        <input  className="name" type="url" name="image" placeholder="URL" onChange={(e)=>handleChange(e)} />
                        <br></br>
                    </div>
                    
                    <div >
                        <label className="name2" >GENRES </label>
                        
                        <div className="in" ><input className="b2" value="Action" type="checkbox" name="genre" onChange={(e)=>handleGenres(e)}/><label>Action  </label></div>
                        <br></br>
                        <br></br>
                        <div className="in"><input value="Indie" type="checkbox" name="genre" onChange={(e)=>handleGenres(e)}/><label>Indie</label></div>
                        <br></br>
                        <br></br>
                        <div className="in"><input value="Strategy" type="checkbox" name="genre" onChange={(e)=>handleGenres(e)}/><label>Strategy</label></div>
                        <br></br>
                        <br></br>

                        <div className="in"><input value="Adventure" type="checkbox"  name="genre" onChange={(e)=>handleGenres(e)}/><label>Adventure</label></div>
                        <br></br>
                        <br></br>
                        
                        <div className="in"><input value="RPG" type="checkbox" name="genre" onChange={(e)=>handleGenres(e)}/><label>RPG</label></div>
                        <br></br>
                        <br></br>

                        <div className="in"><input value="Shooter"type="checkbox" name="genre" onChange={(e)=>handleGenres(e)}/><label>Shooter</label></div>
                        <br></br>
                        <br></br>

                        <div className="in"><input value="Casual" type="checkbox" name="genre" onChange={(e)=>handleGenres(e)}/><label>Casual</label></div>
                        <br></br>
                        <br></br>

                        <div className="in"><input value="Simulation"type="checkbox" name="genre" onChange={(e)=>handleGenres(e)}/><label>Simulation</label></div>
                        <br></br>
                        <br></br>

                        <div className="in"><input value="Arcade" type="checkbox" name="genre" onChange={(e)=>handleGenres(e)}/><label>Arcade</label></div>
                        <br></br>
                        <br></br>

                        <div className="in"><input value="Puzzle" type="checkbox" name="genre" onChange={(e)=>handleGenres(e)}/><label>Puzzle</label></div>
                        <br></br>
                        <br></br>

                        <div className="in"><input value="Platformer" type="checkbox" name="genre" onChange={(e)=>handleGenres(e)}/><label>Platformer</label></div>
                        <br></br>
                        <br></br>

                        <div className="in"><input value="Racing" type="checkbox" name="genre" onChange={(e)=>handleGenres(e)}/><label>Racing</label></div>
                        <br></br>
                        <br></br>

                        <div className="in"><input value="Massively Multiplayer" type="checkbox" name="genre" onChange={(e)=>handleGenres(e)}/><label>Massively Multiplayer</label></div>
                        <br></br>
                        <br></br>

                        <div className="in"><input value="Fighting" type="checkbox" name="genre" onChange={(e)=>handleGenres(e)}/><label>Fighting</label></div>
                        <br></br>
                        <br></br>

                        <div className="in"><input value="Sports" type="checkbox" name="genre" onChange={(e)=>handleGenres(e)}/><label>Sports</label></div>
                        <br></br>
                        <br></br>

                        <div className="in"><input value="Family" type="checkbox" name="genre" onChange={(e)=>handleGenres(e)}/><label>Family</label></div>
                        <br></br>
                        <br></br>

                        <div className="in"><input value="Board Games" type="checkbox" name="genre" onChange={(e)=>handleGenres(e)}/><label>Board Games</label></div>
                        <br></br>
                        <br></br>

                        <div className="in"><input value="Educational" type="checkbox" name="genre" onChange={(e)=>handleGenres(e)}/><label>Educational</label></div>
                        <br></br>
                        <br></br>

                        <div className="in"><input value="Card" type="checkbox" name="genre" onChange={(e)=>handleGenres(e)}/><label>Card</label></div>
                        <br></br>
                        <br></br>
                        
                    </div>

                    <div  > 
                        <label className="name2" >PLATFORMS </label>
                        <div className="in"><input value="PlayStation 4" type="checkbox" name="platforms" onChange={(e)=>handlePlatforms(e)}/><label>PS4</label></div>
                        <br></br>
                        <br></br>

                        <div className="in"><input value="PlayStation 5" type="checkbox" name="platforms" onChange={(e)=>handlePlatforms(e)}/><label>PS5</label></div>
                        <br></br>
                        <br></br>

                        <div className="in"><input value="PC" type="checkbox" name="platforms" onChange={(e)=>handlePlatforms(e)}/><label>PC</label></div>
                        <br></br>
                        <br></br>

                        <div className="in"><input value="SEGA" type="checkbox" name="platforms" onChange={(e)=>handlePlatforms(e)}/><label>SEGA</label></div>
                        <br></br>
                        <br></br>

                        <div className="in"><input value="NINTENDO 64" type="checkbox" name="platforms" onChange={(e)=>handlePlatforms(e)}/><label>NINTENDO 64</label></div>
                        <br></br>
                        <br></br>

                        <div className="in"><input value="Xbox One" type="checkbox" name="platforms" onChange={(e)=>handlePlatforms(e)}/><label>XBOX ONE</label></div>
                        <br></br>
                        <br></br>

                        <div className="in"><input value="Xbox 360" type="checkbox" name="platforms" onChange={(e)=>handlePlatforms(e)}/><label>XBOX X</label></div>
                        <br></br>
                        <br></br>

                        <div className="in"><input value="GAME BOY ADVANCED" type="checkbox" name="platforms" onChange={(e)=>handlePlatforms(e)}/><label>GAME BOY ADVANCED</label></div>
                        <br></br>
                        <br></br>

                        <div className="in"><input value="IOS" type="checkbox" name="platforms" onChange={(e)=>handlePlatforms(e)}/><label>IOS</label></div>
                        <br></br>
                        <br></br>

                        <div className="in"><input value="Linux" type="checkbox" name="platforms" onChange={(e)=>handlePlatforms(e)}/><label>LINUX</label></div>
                        <br></br>
                        <br></br>

                        <div className="in"><input value="Android" type="checkbox" name="platforms" onChange={(e)=>handlePlatforms(e)}/><label>ANDROID</label></div>
                        <br></br>
                        <br></br>

                        <div className="in"><input value="WEB" type="checkbox" name="platforms" onChange={(e)=>handlePlatforms(e)}/><label>WEB</label></div>
                        <br></br>
                        <br></br>

                        <div className="in"><input value="PlayStation" type="checkbox" name="platforms" onChange={(e)=>handlePlatforms(e)}/><label>PLAYSTATION</label></div>
                        <br></br>
                    </div>
                    <div >
                        <br></br>
                        <label >Description: </label>
                        <div>
                            <textarea className="comment" type="text" name="description" placeholder="Type a description of your game" cols="40" rows="6" onChange={(e)=>handleChange(e)} />
                        </div>
                    </div>
                    <button className="submit" type='submit' >Create Game</button>
                    {/* <div className={s.info}></div> */}
                </div>
            </form>
        </div>
    )
}

const mapStateToProps = (store) => {
    return {
        resPost: store.resPost,
        genres: store.genres,
        plataform: store.plataform
    }
}

export default connect(mapStateToProps, {postVideoGames})(Create)
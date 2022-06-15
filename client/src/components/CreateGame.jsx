import React, {useState, useEffect} from "react";
import {  useDispatch, useSelector } from "react-redux";
import {postVideoGames, getGenres, getPlataforms} from '../actions';
import {useHistory} from 'react-router-dom'
import { Link } from "react-router-dom";
import '../styles/CreateGameStyle.css';

export default function Form(){
    const myHistory = useHistory();
    const dispatch = useDispatch();
    const [newGame, setNewGame] = useState({genre:[], plataform:[]});
    const [errores, setErrores] = useState({genre:[], plataform:[]});
    const allGenres = useSelector((state) => state.genres)
    const allPlataforms = useSelector((state) => state.plataform);
    useEffect (()=>{
        dispatch(getGenres()); 
        dispatch(getPlataforms());        
    },[dispatch])

    const genres = allGenres.map((e)=>e.name)
    const plataforms = allPlataforms.map((e)=>e.plataform)
    const plataformsFiltered = [].concat.apply([],plataforms)
    const repeatedPlataforms = {}
    for( let i = 0 ; i < plataformsFiltered?.length ; i++ ){
        repeatedPlataforms[plataformsFiltered[i]]?
        repeatedPlataforms[plataformsFiltered[i]]+=1 :
        repeatedPlataforms[plataformsFiltered[i]]=1
    }
    const finalPlataforms = Object.keys(repeatedPlataforms)

    console.log("soy genresssss", genres)
    // console.log("plataformasdas", finalPlataforms)
    console.log(newGame)
    function validate(newGame){
        const errors = {};
        if(!newGame.name){
            errors.name="Missing add the name"
        }
        if (!newGame.release_date){
            errors.release_date = "Missing add game release date"
        }
     else if(!/^\d{4}([-/.])(0?[1-9]|1[1-2])\1(3[01]|[12][0-9]|0?[1-9])$/.test(newGame.release_date))
        {errors.release_date="You must enter a valid format"}
        if(!newGame.rating) {
            errors.rating = " Enter the rating of the game "
        }else if (!/^[0-5]([.][0-9]{1,2})?/.test(Number(newGame.rating)))
        {errors.rating="The rating must be between 1 and 5"}
        if(!newGame.description) {
            errors.description = "Missing add description"
        } 
        if(!newGame.image){
            errors.image= "Missing add the URL of the image"
        }else if (!/^https?:\/\/[\w-]+(\.[\w-]+)+[/#?]?.*$/.test(newGame.image))
        {errors.image=" You must enter a valid url"}
        if(!newGame.genre || newGame.genre.length===0){
            errors.genre = "Need to add genres"
        }
        
        
        
        return errors;
    }

    function captureValue(e){
        console.log(e.target.value)
        
        if(e.target.name=== "plataform") {
            newGame["plataform"].push(e.target.value);
      
        }
       else if(e.target.name === "genre") {
            newGame["genre"].push(e.target.value);
        }
        else {
            setNewGame({
                ...newGame,
                [e.target.name] : e.target.value
            })
        }
        setErrores(validate({
            ...newGame,
            [e.target.name] : e.target.value
        }))
    }

    function handleSubmit(e){
        e.preventDefault();
        dispatch(postVideoGames(newGame))
        alert("VideoGame created!!");
        myHistory.push("/home")
    }

    return (
        
        <div  className="main">
          
            <form onSubmit={(e)=>handleSubmit(e)}>
                
                <div className="main-content" >
                <Link to= '/home'><button className='selectfont3'>GO HOME</button></Link> 
                    <h3 className="name2"  >CREATE NEW VIDEOGAME</h3>
                    <br></br>

                    <div >
                        
                        <label>Name </label>
                        {errores.name && (
                        <p className="alert">{errores.name}</p>
                    )}
                        <br></br>
                        <input className="name" type="text" name="name" placeholder="..." onChange={(e)=>captureValue(e)} />
                    </div>

                    <div >
                        <label>Release </label>
                        {errores.release_date && (
                        <p className="alert">{errores.release_date}</p>
                    )}
                        <br></br>
                        <input className="name" type="date" name="release_date"  onChange={(e)=>captureValue(e)} />
                    </div>


                    <div >
                        <label>Rating </label>
                        {errores.rating && (
                        <p className="alert" >{errores.rating}</p>
                    )}
                        <br></br>
                        <input  className="name"type="text" name="rating" placeholder="0-5" onChange={(e)=>captureValue(e)} />
                    </div>


                    <div >
                        <label>Image url </label>
                        <br></br>
                        <input  className="name" type="url" name="image" placeholder="URL" onChange={(e)=>captureValue(e)} />
                        {errores.image && (
                        <p  className="alert">{errores.image}</p>
                    )}
                        <br></br>
                    </div>
                    
                    <div >
                        <label className="name2" >GENRES </label>
                        {genres.map((g)=>{
                            return(
                                <>
                                <div className="in" ><input className="b2" value={g} type="checkbox" name="genre" onChange={(e)=>captureValue(e)}/><label>{g}</label></div>
                                <br></br>
                                <br></br>
                                </>
                            )
                        })}
                        {errores.genre && (
                        <p  className="alert">{errores.genre}</p>
                    )}
                        

                       
                        <br></br>
                        <br></br>
                        
                       
                        
                    </div>

                    <div  > 
                        <label className="name2" >PLATFORMS </label>
                       
                        {finalPlataforms.map((p)=>{
                            return(
                                <>
                                 
                                 
                                <div className="in"><input value={p} type="checkbox" name="plataform" onChange={(e)=>captureValue(e)}/><label>{p}</label></div>
                                <br></br>
                                <br></br>
                                </>
                            )
                        })}
                        {errores.plataform && (
                        <p className="alert" >{errores.plataform}</p>
                    )}
                        <br></br>
                    </div>
                    <div >
                        <br></br>
                        <label >Description: </label>
                        <div>
                            <textarea className="comment" type="text" name="description" placeholder="Type a description of your game" cols="40" rows="6" onChange={(e)=>captureValue(e)} />
                       
                            {errores.description && (
                        <p className="alert" >{errores.description}</p>
                    )}
                    </div>
                    </div>
                    {
                    !errores.name &&
                    !errores.plataform &&
                    !errores.release_date &&
                    !errores.genre &&
                    !errores.rating &&
                    !errores.description &&
                    !errores.image 
                
                    ? <button className="submit" type='submit' >Create Game</button> : <p className="alert"> Check the errors  <br /> Before create VideoGame</p>
                }

                    
                </div>
                

            </form>
        </div>

        
    )
    
}





// import React, {useState} from "react";
// import { Link } from "react-router-dom";
// import { connect, useDispatch } from "react-redux";
// import {postVideoGames} from '../actions';
// import {useHistory} from 'react-router-dom'
// import '../styles/CreateGameStyle.css'

// function Create({postVideoGames}){   

//     const [state, setState] = useState({
//         name: '',
//         release_date: null,
//         rating: 0,
//         image: '',
//         genre: [],
//         plataform: [],
//         description: ''
//     })

//     let dispatch = useDispatch();

//     let myHistory = useHistory()

//     function handleChange(e){
//         setState({
//             ...state,
//             [e.target.name]: e.target.value
//         })
        
//     }

//     function handleRating(e){
//         setState({
//             ...state,
//             rating: parseInt(e.target.value)
//         })
//     }
//     function handleGenres(e){
//         setState({
//             ...state,
            
//             genre: state.genre.includes(e.target.value) ? state.genre.filter(el => el !== e.target.value) : state.genre.concat(e.target.value)
//         })
        
//     }


    
    
    
//     function handlePlatforms(e){
//         setState({
//             ...state,
//             plataform: state.plataform.includes(e.target.value) ? state.plataform.filter(el => el !== e.target.value) : state.plataform.concat(e.target.value)
//         })
//         console.log(state)
//     }

//     const handleSubmit = async (e) => {
//         e.preventDefault()
        
       
       
        
       
//         if(state.name == ''){
//             return alert("Missing add the name" + " " + "(Falta agregar el nombre)")
//         }
//         if(state.release_date == ''){
//             return alert("Missing add game release date" + " " + "(Falta agregar la fecha de lanzamiento de juego)")
//         }
//         if(state.rating == 0 || state.rating == '' || state.rating < 1 || state.rating > 5 || state.rating == NaN){
//             return alert("The rating must be between 1 and 5" +  " " + "(El rating debe ser entre 1 y 5)")
//         }
//         if(state.image == ''){
//             return alert("Missing add the URL of the image" + " " + "(Falta agregar el URL de la imagen)")
//         }
//         if(state.description == '' || state.description.length < 5){
//             if(state.description == '') return alert("Missing add description" + " " + "(Falta agregar descripción)")
//             if(state.description.length < 15) return alert("Description must be at least 15 characters" + " " + "(La descripción debe tener al menos 15 caracteres)")
//         }
//         if(state.genre == ''){
//             return alert("Need to add genres" + " " + "(Faltan agregar generos)")
//         }
//         if(state.plataform == ''){
//             return alert("Add platforms" + " " + "(Falta agregar plataformas)")
//         }
       
//         await postVideoGames(state)
//         console.log(state)
//         myHistory.push("/home")
//         alert("The game was created" + " " + "(Se creo el juego)")
       
//     }
   
//     return (
        
//         <div  className="main">
          
//             <form onSubmit={(e)=>handleSubmit(e)}>
                
//                 <div className="main-content" >
//                 <Link to= '/home'><button className='selectfont3'>IR A PAGINA DE INICIO</button></Link> 
//                     <h3 className="name2"  >CREATE NEW VIDEOGAME</h3>
//                     <br></br>

//                     <div >
                        
//                         <label>Name of the game: </label>
//                         <br></br>
//                         <input className="name" type="text" name="name" placeholder="..." onChange={(e)=>handleChange(e)} />
//                     </div>

//                     <div >
//                         <label>Release: </label>
//                         <br></br>
//                         <input className="name" type="date" name="released"  onChange={(e)=>handleChange(e)} />
//                     </div>


//                     <div >
//                         <label>Rating: </label>
//                         <br></br>
//                         <input  className="name"type="text" name="rating" placeholder="0-5" onChange={(e)=>handleRating(e)} />
//                     </div>


//                     <div >
//                         <label>Image url: </label>
//                         <br></br>
//                         <input  className="name" type="url" name="image" placeholder="URL" onChange={(e)=>handleChange(e)} />
//                         <br></br>
//                     </div>
                    
//                     <div >
//                         <label className="name2" >GENRES </label>
                        
//                         <div className="in" ><input className="b2" value="Action" type="checkbox" name="genre" onChange={(e)=>handleGenres(e)}/><label>Action  </label></div>
//                         <br></br>
//                         <br></br>
//                         <div className="in"><input value="Indie" type="checkbox" name="genre" onChange={(e)=>handleGenres(e)}/><label>Indie</label></div>
//                         <br></br>
//                         <br></br>
//                         <div className="in"><input value="Strategy" type="checkbox" name="genre" onChange={(e)=>handleGenres(e)}/><label>Strategy</label></div>
//                         <br></br>
//                         <br></br>

//                         <div className="in"><input value="Adventure" type="checkbox"  name="genre" onChange={(e)=>handleGenres(e)}/><label>Adventure</label></div>
//                         <br></br>
//                         <br></br>
                        
//                         <div className="in"><input value="RPG" type="checkbox" name="genre" onChange={(e)=>handleGenres(e)}/><label>RPG</label></div>
//                         <br></br>
//                         <br></br>

//                         <div className="in"><input value="Shooter"type="checkbox" name="genre" onChange={(e)=>handleGenres(e)}/><label>Shooter</label></div>
//                         <br></br>
//                         <br></br>

//                         <div className="in"><input value="Casual" type="checkbox" name="genre" onChange={(e)=>handleGenres(e)}/><label>Casual</label></div>
//                         <br></br>
//                         <br></br>

//                         <div className="in"><input value="Simulation"type="checkbox" name="genre" onChange={(e)=>handleGenres(e)}/><label>Simulation</label></div>
//                         <br></br>
//                         <br></br>

//                         <div className="in"><input value="Arcade" type="checkbox" name="genre" onChange={(e)=>handleGenres(e)}/><label>Arcade</label></div>
//                         <br></br>
//                         <br></br>

//                         <div className="in"><input value="Puzzle" type="checkbox" name="genre" onChange={(e)=>handleGenres(e)}/><label>Puzzle</label></div>
//                         <br></br>
//                         <br></br>

//                         <div className="in"><input value="Platformer" type="checkbox" name="genre" onChange={(e)=>handleGenres(e)}/><label>Platformer</label></div>
//                         <br></br>
//                         <br></br>

//                         <div className="in"><input value="Racing" type="checkbox" name="genre" onChange={(e)=>handleGenres(e)}/><label>Racing</label></div>
//                         <br></br>
//                         <br></br>

//                         <div className="in"><input value="Massively Multiplayer" type="checkbox" name="genre" onChange={(e)=>handleGenres(e)}/><label>Massively Multiplayer</label></div>
//                         <br></br>
//                         <br></br>

//                         <div className="in"><input value="Fighting" type="checkbox" name="genre" onChange={(e)=>handleGenres(e)}/><label>Fighting</label></div>
//                         <br></br>
//                         <br></br>

//                         <div className="in"><input value="Sports" type="checkbox" name="genre" onChange={(e)=>handleGenres(e)}/><label>Sports</label></div>
//                         <br></br>
//                         <br></br>

//                         <div className="in"><input value="Family" type="checkbox" name="genre" onChange={(e)=>handleGenres(e)}/><label>Family</label></div>
//                         <br></br>
//                         <br></br>

//                         <div className="in"><input value="Board Games" type="checkbox" name="genre" onChange={(e)=>handleGenres(e)}/><label>Board Games</label></div>
//                         <br></br>
//                         <br></br>

//                         <div className="in"><input value="Educational" type="checkbox" name="genre" onChange={(e)=>handleGenres(e)}/><label>Educational</label></div>
//                         <br></br>
//                         <br></br>

//                         <div className="in"><input value="Card" type="checkbox" name="genre" onChange={(e)=>handleGenres(e)}/><label>Card</label></div>
//                         <br></br>
//                         <br></br>
                        
//                     </div>

//                     <div  > 
//                         <label className="name2" >PLATFORMS </label>
//                         <div className="in"><input value="PlayStation 4" type="checkbox" name="platforms" onChange={(e)=>handlePlatforms(e)}/><label>PS4</label></div>
//                         <br></br>
//                         <br></br>

//                         <div className="in"><input value="PlayStation 5" type="checkbox" name="platforms" onChange={(e)=>handlePlatforms(e)}/><label>PS5</label></div>
//                         <br></br>
//                         <br></br>

//                         <div className="in"><input value="PC" type="checkbox" name="platforms" onChange={(e)=>handlePlatforms(e)}/><label>PC</label></div>
//                         <br></br>
//                         <br></br>

//                         <div className="in"><input value="SEGA" type="checkbox" name="platforms" onChange={(e)=>handlePlatforms(e)}/><label>SEGA</label></div>
//                         <br></br>
//                         <br></br>

//                         <div className="in"><input value="NINTENDO 64" type="checkbox" name="platforms" onChange={(e)=>handlePlatforms(e)}/><label>NINTENDO 64</label></div>
//                         <br></br>
//                         <br></br>

//                         <div className="in"><input value="Xbox One" type="checkbox" name="platforms" onChange={(e)=>handlePlatforms(e)}/><label>XBOX ONE</label></div>
//                         <br></br>
//                         <br></br>

//                         <div className="in"><input value="Xbox 360" type="checkbox" name="platforms" onChange={(e)=>handlePlatforms(e)}/><label>XBOX X</label></div>
//                         <br></br>
//                         <br></br>

//                         <div className="in"><input value="GAME BOY ADVANCED" type="checkbox" name="platforms" onChange={(e)=>handlePlatforms(e)}/><label>GAME BOY ADVANCED</label></div>
//                         <br></br>
//                         <br></br>

//                         <div className="in"><input value="IOS" type="checkbox" name="platforms" onChange={(e)=>handlePlatforms(e)}/><label>IOS</label></div>
//                         <br></br>
//                         <br></br>

//                         <div className="in"><input value="Linux" type="checkbox" name="platforms" onChange={(e)=>handlePlatforms(e)}/><label>LINUX</label></div>
//                         <br></br>
//                         <br></br>

//                         <div className="in"><input value="Android" type="checkbox" name="platforms" onChange={(e)=>handlePlatforms(e)}/><label>ANDROID</label></div>
//                         <br></br>
//                         <br></br>

//                         <div className="in"><input value="WEB" type="checkbox" name="platforms" onChange={(e)=>handlePlatforms(e)}/><label>WEB</label></div>
//                         <br></br>
//                         <br></br>

//                         <div className="in"><input value="PlayStation" type="checkbox" name="platforms" onChange={(e)=>handlePlatforms(e)}/><label>PLAYSTATION</label></div>
//                         <br></br>
//                     </div>
//                     <div >
//                         <br></br>
//                         <label >Description: </label>
//                         <div>
//                             <textarea className="comment" type="text" name="description" placeholder="Type a description of your game" cols="40" rows="6" onChange={(e)=>handleChange(e)} />
//                         </div>
//                     </div>
//                     <button className="submit" type='submit' >Create Game</button>
                    
//                 </div>
//             </form>
//         </div>

        
//     )
    
// }

// const mapStateToProps = (store) => {
//     return {
//         resPost: store.resPost,
//         genres: store.genres,
//         plataform: store.plataform
        
//     }
// }


// export default connect(mapStateToProps, {postVideoGames})(Create)


{/* <label className="name2" >PLATFORMS </label>
{plataforms.map((p)=>{
    return(
        <>
         
         
        <div className="in"><input value={p} type="checkbox" name="plataforms" onChange={(e)=>captureValue(e)}/><label>{p}</label></div>
        <br></br>
        <br></br>
        </>
    )
})} */}
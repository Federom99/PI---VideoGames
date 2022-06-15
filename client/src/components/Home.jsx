import React from 'react';
import {useState, useEffect, Fragment} from 'react'; //  HOOK USAMOS useState es un hook (//)Fragment es como un div para envolver hijos div en app)
import {useDispatch, useSelector} from 'react-redux';
import {getVideoGames, getGenres, filterVideogamesByGenre, filterCreated, orderByName, getPlataforms, orderByRating} from '../actions';
import '../styles/HomeStyle.css'
//LINK nos sirve para poder movernos por nuestra aplicación
//más fácilmente en lugar de tener que cambiar la URL manualmente en el navegador.
import {Link} from 'react-router-dom';

import Card from './Card';
import SearchBar from './SearchBar';
import Paginado from './Paginado';

export default function Home (){    
    const dispatch = useDispatch(); // PARA USAR HOOKS
    const allGames = useSelector((state) => state.videogames) 
    const [order, setOrder] = useState(''); // es un estado local q arranca vacio para el Asc y Desc Order

      //CREO VARIOS ESTADOS LOCALES y lo seteo en 1- ACA CALCULO LAS CARD POR PAGINAS
      const [currentPage, setCurrentPage] = useState(1); //defino 2 stados 1 con pagina actual y otro q resetea pagina actual
      const [gamesPage, setGamesPage] = useState(15); 
      const indexOfLastGame = currentPage * gamesPage 
      const indexOfFirstGame = indexOfLastGame - gamesPage 

       // currentGames devuelve un arreglo q entra del 1 al 9
    // creo una constante de los Games en la pagina actual y me traigo el array del estado de los Games 
    const currentGames =  allGames?.slice(indexOfFirstGame, indexOfLastGame)

    const genres = useSelector((state) => state.genres); //estado global de Generos
    // const plataforms = useSelector((state) => state.plataforms); //estado global de Plataformas
    // const ratings = useSelector((state) => state.ratings);

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    // ** TRAIGO DEL ESTADO LOS GENEROS CUANDO EL COMPONENTE SE MONTA
    useEffect (()=>{
        dispatch(getVideoGames());
        dispatch(getGenres()); 
        dispatch(getPlataforms());        
        //getListGenres para usar con filtrados por Genero
    },[dispatch])

    // ** PARA RESETEAR AL TOCAR EL BOTON volver a cargar los Juegos
    function handleClick(p){
        p.preventDefault(); //PREVENTIVO PARA Q NO RECARGUE TODA LA PAGINA
        dispatch(getVideoGames())}

         // ** ORDENAMIENTO DE PAGINA ASCENDENTE O DESCENDENTE
    function handleSort(p){
        p.preventDefault();
        dispatch(orderByName(p.target.value)) //despacho la accion
        setCurrentPage(1); //ordenamiento seteado en pagina 1
        setOrder(`Ordenado ${p.target.value}`)  //es un estado local vacio, lo uso para modif estado local y renderize
    }; 

    function handleSortRating(p){
        p.preventDefault();
        dispatch(orderByRating(p.target.value)) //despacho la accion
        setCurrentPage(1); //ordenamiento seteado en pagina 1
        setOrder(`Ordenado ${p.target.value}`)  //es un estado local vacio, lo uso para modif estado local y renderize
    }; 

    //Aca aplico lógica, esta funcion le paso en el select de Types 
    //En HOME -> ALL Generos/Plataformas ETC
    function handleFilterGamesByGenre(p){
        dispatch(filterVideogamesByGenre(p.target.value))
        console.log(p.target.value)
    };

    //filtramos los creados en la Bdatos
    function handlefilterCreated(p) {
        p.preventDefault();
        dispatch(filterCreated(p.target.value))
    };    



    return(
        
        <div className='a'>        
            <div className='a' >             
                <div className='padre'>
                   
                </div>
            <div>
    
                <Link to= '/'><button className='selectfont'>GO TO INITIAL PAGE</button></Link> 
                <button  className="selectfont" onClick={p => {handleClick(p)}}>RELOAD GAMES</button>
                
                <Link to= '/videogames'><button className="selectfont" >CREATE NEW GAME</button></Link>                    
            </div>            
                
                <br />
            <SearchBar
            />  
            <div >                
            <div  >
                <br />
                <select className="selectfont2" onChange={p => handleSort(p)}>
                    <option value="" selected disabled hidden  >In alphabetical order</option>                
                    <option value='asc' > A-Z</option>
                    <option value='desc'> Z-A</option>
                </select>            
                           
                <select  className="selectfont2" onChange={p => handlefilterCreated(p)}>                
                    <option value="" selected disabled hidden>Show Games</option>
                    <option value="all">All games</option>
                    <option value="api">From API</option>
                    <option value="created">Created</option>
                   
                </select>   
                <select  className="selectfont2" onChange={p => handleSortRating(p)}>                
                    <option value="" selected disabled hidden>Rating</option>                
                    <option value="rasd">Low Score</option>
                    <option value="rdes">High Score</option>
                   
                </select>   
    
                <select  className="selectfont2" onChange={p => handleFilterGamesByGenre(p)}>
                    <option value="sinFiltro" selected disabled hidden>Genres</option>               
                    {genres?.map((p) => {
                            return (
                                <option key={p.id} value={p.name}>
                                    {p.name}
                                </option>
                            );
                        })}                    
                  
                </select> 
                <br /><br /><br />
            </div>
        </div>
                        
                 
                    {/* ACA NE TRAIGO LA CARD PARA RENDERIZAR con los datos que quiero */}


                        
                        
                    <div  className='cc' >   {currentGames?.length > 0 ? ( 
                        currentGames?.map((e)=>{

                            return (
                                <Fragment>

                            <Card image={e.image} name ={e.name} rating={e.rating} genre= {e.genre } id={e.id}/>

                                </Fragment>
                            )

                        })) :  
                           
                        <div className='gif' >
                             <img  src="https://c.tenor.com/WlKcCyNqoZwAAAAC/super-mario-mario.gif" alt="Loading"/>
                <h1 className='b'>Loading...</h1>
                
               
                    </div>
            }   
            </div> 
                         {/* aca defino las props que necesita el paginado */}
                        <Paginado
                        gamesPage = {gamesPage}
                        allGames={allGames?.length}
                        paginado = {paginado}                    
                         />          
    
                
                    
             </div> 
        </div>     
           
        )}
        
import React from 'react';
import {useState, useEffect, Fragment} from 'react'; //  HOOK USAMOS useState es un hook (//)Fragment es como un div para envolver hijos div en app)
import {useDispatch, useSelector} from 'react-redux';
import {getVideoGames, getGenres, filterGamesByGenre, filterCreated, orderByName, getPlataforms, orderByRating} from '../actions';

//LINK nos sirve para poder movernos por nuestra aplicación
//más fácilmente en lugar de tener que cambiar la URL manualmente en el navegador.
import {Link} from 'react-router-dom';

import Card from './Card';
import SearchBar from './SearchBar';
import Paginado from './Paginado';

export default function Home (){ 
    const { games, name, page, order, genre} = useSelector(state => state);    
    const dispatch = useDispatch(); // PARA USAR HOOKS
    const allGames = useSelector((state) => state.games) 
    const [orden, setOrden] = useState(''); // es un estado local q arranca vacio para el Asc y Desc Order

      //CREO VARIOS ESTADOS LOCALES y lo seteo en 1- ACA CALCULO LAS CARD POR PAGINAS
      const [currentPage, setCurrentPage] = useState(1); //defino 2 stados 1 con pagina actual y otro q resetea pagina actual
      const [gamesPerPage, setGamesPerPage] = useState(15); 
      const indexOfLastGame = currentPage * gamesPerPage // aca vale 0 a 14 = 15
      const indexOfFirstGame = indexOfLastGame - gamesPerPage // 0

       // currentGames devuelve un arreglo q entra del 1 al 15
    // creo una constante de los Games en la pagina actual y me traigo el array del estado de los Games 
    const currentGames =  allGames?.slice(indexOfFirstGame, indexOfLastGame)

    const genres = useSelector((state) => state.genres); //estado global de Generos
    const plataforms = useSelector((state) => state.plataforms); //estado global de Plataformas
    const ratings = useSelector((state) => state.ratings);

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
        setOrden(`Ordenado ${p.target.value}`)  //es un estado local vacio, lo uso para modif estado local y renderize
    }; 

    function handleSortRating(p){
        p.preventDefault();
        dispatch(orderByRating(p.target.value)) //despacho la accion
        setCurrentPage(1); //ordenamiento seteado en pagina 1
        setOrden(`Ordenado ${p.target.value}`)  //es un estado local vacio, lo uso para modif estado local y renderize
    }; 

    //Aca aplico lógica, esta funcion le paso en el select de Types 
    //En HOME -> ALL Generos/Plataformas ETC
    function handleFilterGamesByGenre(p){
        dispatch(filterGamesByGenre(p.target.value))
    };

    //filtramos los creados en la Bdatos
    function handleFilterCreated(p) {
        p.preventDefault();
        dispatch(filterCreated(p.target.value))
    };    



    return(
        
        <div>        
            <div>             
                <div >
                    <h1 >Welcome</h1>
                </div>
            <div>
    
                <Link to= '/'><button >IR A PAGINA DE INICIO</button></Link> 
                <button  onClick={p => {handleClick(p)}}>VOLVER A CARGAR JUEGOS</button>
                <Link to= '/Newvideogames'><button >CREAR JUEGO NUEVO</button></Link>                    
            </div>            
                
                <br />
            <SearchBar
            />  
            <div>                
            <div >
                <br />
                <select  onChange={p => handleSort(p)}>
                    <option value="" selected disabled hidden>Por Orden alfabético</option>                
                    <option value='asc'>Ascendente A-Z</option>
                    <option value='desc'>Descendente Z-A</option>
                </select>            
                           
                <select  onChange={p => handleFilterCreated(p)}>                
                    <option value="" selected disabled hidden>Mostrar Juegos</option>
                    <option value="all">Todos Los Juegos</option>
                    <option value="api">De la API</option>
                    <option value="created">Creados</option>
                   
                </select>   
                <select  onChange={p => handleSortRating(p)}>                
                    <option value="" selected disabled hidden>Rating</option>                
                    <option value="rasd">High Score</option>
                    <option value="rdes">Low Score</option>
                   
                </select>   
    
                <select  onChange={p => handleFilterGamesByGenre(p)}>
                    <option value="sinFiltro" selected disabled hidden>Generos</option>               
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
                {/* aca defino las props que necesita el paginado */}
                <Paginado
                        gamesPerPage = {gamesPerPage}
                        allGames={allGames?.length}
                        paginado = {paginado}                    
                />             
                    {/* ACA NE TRAIGO LA CARD PARA RENDERIZAR con los datos que quiero */}
                    {currentGames?.map ((p) =>{  // CON ? PREGUNTA SI EXISTE Y DESPUES MAPEA
                        return(
                        <Fragment>                    
                            <div>                           
                                <Link 
                                    key={p.id}
                                    to={`/videogames/${p.id}`}                            
                                >
                                <Card
                                        name={p.name} 
                                        image={p.image ? p.image : p.image}
                                        genre={p.genre}  
                                        genres={p.genres}                               
                                        platform={p.platform}
                                        platforms={p.platforms}
                                />                        
                                </Link>
                         
                  
                        </div>
                        
                        </Fragment> 
                    );
                    })}
                </div> 
        </div>        
        )}
        
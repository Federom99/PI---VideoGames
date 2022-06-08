const initialState = {
  videogames: [],
  allVideoGames: [],
  genres: [],
  plataform: [],
  videoGamesdetails: [],
  gamesDelete: [],
  resPost: []

};


export default function rootReducer(state =  initialState, action){ //action.payload llega las opciones del select
    //console.log(action)
    switch(action.type){
        
        case 'GET_VIDEO_GAMES':
            return{
                ...state, // guardamos el estado anterior como buena practica
                videogames: action.payload,  
                //Asi creamos en JSON - var json = await axios.get("http://localhost:3001/dogs",{});
                // el payload lo creamos en actions como payload: json.data
                allVideoGames: action.payload
            }      
        case 'GET_VIDEOGAMES_QUERY':
            return{
                ...state,
                videogames: action.payload
            }      
        case 'GET_GENRES':            
            return{
                ...state,                
                genres: action.payload
            }  
        case 'GET_PLATAFORMS':            
            return{
                ...state,                
                plataform: action.payload
            } 
        case 'FILTER_GAMES_BY_GENRES':
            const allStateGames = state.allVideoGames
            const tempGames = allStateGames.filter(p => {
                if(p.genre){ // info viene como [{name:..},{name:..},{name:..}]
                    const genres = p.genre
                    return genres.includes(action.payload)}
               
                
            })           
            return {
                ...state,
                videogames: action.payload === 'sinFiltro' ? allStateGames : tempGames,
                // ? es entonces// : es sino // es un ternario
            }
        case 'SUBMIT_GAME'://No se declara en actions, se declara en el reducer. 
                          //en action solo se trae la ruta
                 return{
                    ...state,
                    resPost: action.json

                 }
                
        case 'GET_DETAIL':            
                return {
                    ...state,
                    videoGamesdetails: action.payload
                }

        case 'FILTER_CREATED':                
                // uso ternario
                const allGameApiDB = state.allVideoGames
                const createFilter = action.payload === 'created' ? allGameApiDB.filter(p => p.createInDb) : state.allVideoGames.filter(p => !p.createInDb)
                return{
                   ...state,
                   videogames: action.payload === 'all' ? allGameApiDB : createFilter
                }
                // const createGames = action.payload === 'created' ? allGames : allGames.filter(p => p.status.createInDb) : state.allGames.filter(p => !p.status.createInDb)
                // return{
                //    ...state,
                //    games: createGames 
                // }
        case 'ORDER_BY_NAME':
                let sortedArr = action.payload === 'asc' ?
                state.videogames.sort(function(a,b){
                    if (a.name > b.name) {
                        return 1;
                    }
                    if (a.name < b.name) {
                        return -1;
                    }
                    return 0;
                }) :
                state.videogames.sort(function(a,b){
                    if (a.name > b.name) {
                        return -1;
                    }
                    if (a.name < b.name) {
                        return 1;
                    }
                    return 0;
                })        
                
                return{
                   ...state,
                   videogames: sortedArr // paso al estado el ordenamiento
            }
            case 'ORDER_BY_RATING':
                let RsortedArr = action.payload === 'rasd' ?
                state.videogames.sort(function(a,b){
                    if (a.rating > b.rating) {
                        return 1;
                    }
                    if (a.rating < b.rating) {
                        return -1;
                    }
                    return 0;
                }) :
                state.videogames.sort(function(a,b){
                    if (a.rating > b.rating) {
                        return -1;
                    }
                    if (a.rating < b.rating) {
                        return 1;
                    }
                    return 0;
                })        
                
                return{
                   ...state,
                   videogames: RsortedArr // paso al estado el ordenamiento
            }
        default:
                return state;
        }
    }
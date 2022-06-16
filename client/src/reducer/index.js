const initialState = {
    videogames: [],
    allVideoGames: [],
    genres: [],
    plataform: [],
    resPost: [],
    createInDb: [],
    videoGamesdetails: [],
  };
  
  
  export default function rootReducer(state =  initialState, action){ //action.payload llega las opciones del select
      //console.log(action)
      switch(action.type){
      case 'GET_VIDEO_GAMES':
      return{  ...state, 
      videogames: action.payload,  
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

     case 'DELETE_VIDEOGAME':
      return {
          ...state
      }
    
     
     case 'FILTER_BY_GENRE':
    const allStateGames = state.allVideoGames
    const tempGames = allStateGames.filter(p => {
    if(p.genre){ 
    const genres = p.genre
    return genres.includes(action.payload)}
    })           
    return {
    ...state,
    videogames: action.payload === 'sinFiltro' ? allStateGames : tempGames,
    }
    
    
    case 'SUBMIT_GAME':
    return{
    ...state,
    resPost: action.json
    }
    
    
    case 'GET_DETAIL':   
            // let arrGenre = action.payload;
            // let arrDetail = []

            // if (action.payload.hasOwnProperty('name')) {
            //     arrDetail = action.payload
            // }

            // if (action.payload[0] && action.payload[0].hasOwnProperty('createdVideoGame')) {
            //     arrDetail = arrGenre[0]
            // }

            // return {
            //     ...state,
            //     detail: arrDetail
            // }  
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
    
    
    case 'ORDER_BY_NAME':
    let sortedArr = action.payload === 'asc' ?

    state.videogames.sort(function(a,b){

    if (a.name > b.name) { return 1; }

    if (a.name < b.name) { return -1;}

    return 0;

    }) :
    state.videogames.sort(function(a,b){

    if (a.name > b.name) { return -1;}

    if (a.name < b.name) {return 1;}
    
    return 0;
    })        
    return{
    ...state,
    videogames: sortedArr // paso al estado el ordenamiento
    }
    
    
    case 'ORDER_BY_RATING':
    let RsortedArr = action.payload === 'rasd' ?

    state.videogames.sort(function(a,b){

    if (a.rating > b.rating) {return 1;}

    if (a.rating < b.rating) {return -1;}

    return 0;
    }) :
    state.videogames.sort(function(a,b){
    if (a.rating > b.rating) {return -1;}

    if (a.rating < b.rating) {return 1;}

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
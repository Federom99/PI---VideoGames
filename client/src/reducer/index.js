const initialState = {
  videogames: [],
  allGenres: [],
  genreTypes: [],
  videogameTypes: [],
  detail: []

};


const rootReducer = (state = initialState, action)=>{
  switch(action.type){
      case 'GET_VIDEO_GAMES' : 
          return {
              ...state,
              videogames : action.payload,
              allGenres : action.payload
          };

          case "FILTER_BY_GENRE" :
            const All_genres = state.allGenres;
            const genreFiltered = action.payload === 'all' ? All_genres : All_genres.filter(e=> e.genres.includes(action.payload));
            return {
                ...state,
                allGenres : genreFiltered
            }

            case "ORDER_BY_NAME" : 
            const arrSorted = action.payload === 'asc' ?
                state.allGenres.sort(function (a, b){
                    if (a.name > b.name){
                        return 1
                    }
                    if (b.name > a.name){
                        return -1
                    }
                    return 0
                }):
                    state.allGenres.sort(function (a, b){
                    if (a.name > b.name){
                        return -1
                    }
                    if (b.name > a.name){
                        return 1;
                    }
                    return 0
                    })
            return {
                ...state,
                allGenres : arrSorted
            }

            case "ORDER_BY_RATING" : 
            const arrScored = action.payload === 'asc' ?
                state.allGenres.sort(function (a, b){
                    if (a.ratingScore > b.ratingScore){
                        return 1
                    }
                    if (b.ratingScore > a.ratingScore){
                        return -1
                    }
                    return 0
                }):
                    state.allGenres.sort(function (a, b){
                    if (a.ratingScore > b.ratingScore){
                        return -1
                    }
                    if (b.ratingScore > a.ratingScore){
                        return 1;
                    }
                    return 0
                    })
            return {
                ...state,
                allGenres : arrScored
            }        

            case "GET_VIDEOGAMES_QUERY" :
              return {
                  ...state,
                  allGenres : action.payload
              }

              case "GET_GENRES"  : 
            return {
                ...state,
                genreTypes : action.payload
            }

            case "GET_GENRE_TYPES" :
              return{
                  ...state,
                  videogameTypes : action.payload
              }

              case "POST_VIDEOGAME" : 
              return {
                  ...state
              }

              case "GET_DETAIL" :
            return{
                ...state,
                detail : action.payload
            }
        default : 
            return state
    }
}
 
export default rootReducer
import axios from 'axios';
export const buscar = "buscar_los_juegos";
export const buscarPorNombre = "buscar_por_nombre";
export const gameByRating = "obtener_los_juegos_por_rating";
export const buscarNombrePorId = "buscar_nombre_por_id";
export const gameByGenre = "obtener_games_por_genero";
export const obtenerGeneros = "obtener_generes_data_base";
export const alphabeticalOrder = "obtener_games_alfb";
export const postSubmit = "crear_game";

export function searchGames () {
    return async function(dispatch) {
        let json = await axios.get( '/videogames');

        return dispatch({
            type: buscar,
            payload : json.data
        })
    }
}

export function searchByName (name) {
    return async function (dispatch){
        if(name !== ''){
            let gamesNames = await axios.get(`/videogames?name=${name}`)
            return dispatch({
                type: buscarPorNombre,
                payload: gamesNames.data
            })
        }
        return dispatch({
            type: buscarPorNombre,
            payload: null
        })
    }
}

export function buscarPorRating(descAsc){
    return async function(dispatch){
        let games = await axios.get('/videogames')
        return dispatch({
            type: gameByRating,
            payload: games.data,
            descAsc: descAsc
        })
    }
}

export function gameById(id){
    return async function(dispatch){
        let gamesId = await axios.get(`/videogames/${id}`)
        return dispatch({
            type: buscarNombrePorId,
            payload: gamesId.data
        })
    }
}






export function buscarPorGenero(name){
    return async function(dispatch){
        let games = await axios.get('/videogames')
        return dispatch({
            type: gameByGenre,
            payload: games.data,
            name: name
        })
    }
}


export function getGenres(){
    return async function(dispatch){
        let genres = await axios.get('/genres')
        return dispatch({
            type: obtenerGeneros,
            payload: genres.data
        })
    }
}

export function ordenAlfabetico(descAsc){
    return async function(dispatch){
        let games = await axios.get('/videogames')
        return dispatch({
            type: alphabeticalOrder,
            payload: games.data,
            descAsc: descAsc
        })
    }
}

export function submitPost(datos){
    return async function(){
        let postgame = await axios.post('http://localhost:3001/videogames', datos)
        console.log(postgame.data)
        return {
            type: postSubmit,
            postgame: postgame.data
        }
    }
}

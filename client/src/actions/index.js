import axios from 'axios';

export const getVideoGames = ()=> {
    return async function(dispatch) {
        let json = await axios.get('http://localhost:3001/videogames');

        return dispatch({
            type: "GET_VIDEO_GAMES",
            payload : json.data
        })
    }
}

export const filterVideogamesByGenre = (payload)=>{
    return {
        type : "FILTER_BY_GENRE",
        payload : payload
    }
}

export const orderByName = (payload)=>{
    return {
        type : "ORDER_BY_NAME",
        payload : payload
    }
}

export const orderByRating = (payload)=>{
    return{
        type : "ORDER_BY_RATING",
        payload : payload
    }
}

export const getNameVideoGames = (name)=>{
    return async function(dispatch){
        try{
            let json = await axios.get(`http://localhost:3001/videogames?name=${name}`);
            return dispatch({
                type : "GET_VIDEOGAMES_QUERY",
                payload : json.data
            })
        }
        catch(e){
            console.log(e)
        }
    }
}

export const getGenderType = ()=>{
    return async function(dispatch){
        try{
            let gt = [];
            let json = await axios.get('http://localhost:3001/videogames');
            let mapper = json.data.map(e=> e.genderTypes);
            mapper.forEach(a=> Array.isArray(a) ? a.forEach(e=> !gt.includes(e)? gt.push(e) : e) : a)
    
            return dispatch({
                type : "GET_GENRE_TYPES",
                payload : gt
            })
        }
        catch(e){
            console.log(e)
        }
    }
}


export const getGenres = ()=>{
    return async function(dispatch){
        try{
            let json = await axios.get('http://localhost:3001/genres');
            return dispatch({
                type : "GET_GENRES",
                payload : json.data
            })
        }
        catch(e){
            console.log(e)
        }
    }
}

export const postVideoGames= (payload)=>{
    return async function(){
        try{
            let json = await axios.post('http://localhost:3001/videogames', payload);
            return json;
        }
        catch(e){
            console.log(e)
        }
    }
}

export const getDetails = (id)=>{
    return async function(dispatch){
        try{
            let json = await axios.get(`http://localhost:3001/videogames/${id}`);
            return dispatch({
                type : "GET_DETAIL",
                payload : json.data
            });
        }
        catch(e){
            console.log(e)
        }
    }
}












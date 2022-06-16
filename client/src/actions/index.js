import axios from 'axios';
export const SET_PAGE = 'SET_PAGE';

export const getVideoGames = ()=> {
    return async function(dispatch) {
    try {
    const a = await axios.get('http://localhost:3001/videogames');
    if(a.status === 200) {
    dispatch({
    type: "GET_VIDEO_GAMES",
    payload : a.data
    })}
    } catch (error) {
    console.log(error)}
    }
    }

export const filterVideogamesByGenre = (payload)=>{
    return {
    type : "FILTER_BY_GENRE",
    payload : payload
    }}

export const orderByName = (payload)=>{
    return {
    type : "ORDER_BY_NAME",
    payload : payload
    }}

export const orderByRating = (payload)=>{
    return{
    type : "ORDER_BY_RATING",
    payload : payload
    }}

export const getNameVideoGames = (name)=>{
    return async function(dispatch){
    try{
    let json = await axios.get(`http://localhost:3001/videogames?name=${name}`);
    return dispatch({
    type : "GET_VIDEOGAMES_QUERY",
    payload : json.data
    })}
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
    })}
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
    })}
    catch(e){
    console.log(e)
    }
    }
    }

export function getPlataforms(){
    return async function (dispatch){
    var json = await axios.get("http://localhost:3001/videogames", {});
    return dispatch({
    type: "GET_PLATAFORMS", 
    payload: json.data});
    };}

export function getListGenres(){ //(GameCreate) (HOME) Me trae los Generos
    return function(dispatch){
    axios.get('http://localhost:3001/genres')
    .then((response)=>{
    dispatch({type:'GET_GENRES', payload: response.data})
    }) 
    .catch(()=>{ alert('Error al traer Generos')})
    }}

export function filterGamesByGenre(payload){
   return {
   type: 'FILTER_GAMES_BY_GENRES',
   payload
   }};

//hacemos la accion de filtrar por API o Bdatos // payload trae el value de la accion q elija
export function filterCreated(value){ //payload es el value q me llega
    // console.log(payload)
    return{
    type: 'FILTER_CREATED',
    payload: value
    }};

export function setPage(page){
    return {
    type: SET_PAGE,
    payload: page
    }}

export const postVideoGames= (payload)=>{
    
    return async function(){
    try{
    const json = await axios.post('http://localhost:3001/videogames', payload);
    return {
    type: 'SUBMIT_GAME',
    json: json.data
    }
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
    });}
    catch(e){
    console.log(e)
    }
    }
    }

    export const deleteGame = (id) => {
        return async function (dispatch) {
            try {
                await axios.delete(`http://localhost:3001/videogames/${id}`);
                return dispatch({
                    type: 'DELETE_VIDEOGAME'
                });
            } catch (error) {
                console.log(error)
            }
        }
    }












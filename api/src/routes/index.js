require('dotenv').config();
const { Router } = require('express');
const axios = require ("axios")
const {KEY_API } = process.env;
const {Videogame, Genero} = require("../db.js")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


const allinfo = async () =>{
    try {
        var total = []
        for(let i=1; i <=5; i++){
            const urlApi = await axios.get(`https://api.rawg.io/api/games?key=${KEY_API}&page=${i}`);
            let infoApi = urlApi.data.results.map((e)=>{
                return{
                    id: e.id,
                    name: e.name,
                    description: e.description,
                    release_date: e.release_date,
                    raiting: e.raiting,
                    plataform: e.plataform,
                    genres: e.genres?.map((e)=>e.name),

                }
            })
            total= total.concat(infoApi)
        }
        return total;
    } catch (error) {
        console.log(error)
    }
}

const getInfoDB = async () =>{
    return await Videogame.findAll({
        incluide:{
            model: Genero,
            attributes: ['name'],
            through:{
                attributes: [],
            },
        },
    });
}

const mergeInfo = async()=>{
    const infoApi = await this.allinfo();
    const infoDB = await getInfoDB();
    const infoMerge = infoApi.concat(infoDB);
    return infoMerge;
}

module.exports = router;

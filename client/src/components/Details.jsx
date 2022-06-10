import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { getDetails } from '../actions/index';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import '../styles/Details.css'



export default function Detail(p){
    const dispatch = useDispatch();
    const {id} = useParams();
    const info = useSelector((state)=> state.videoGamesdetails);
   

    useEffect(()=>{
        dispatch(getDetails(id))
    }, [dispatch, id])
    
   
  
    return(
        <div >
            {
            
                info?
                <div  className='m'>
                    <h1>Name:</h1>
                    < h2>{info.name}</h2>
                    <img src={info.image} alt='img nf' width="1000px" height="350px" />
                    <h2> Description: </h2>
                    <h3 >{info.description}</h3>
                    <h2>Released</h2>
                    <h3 >{info.release_date}</h3>
                    
                          <h2> Rating:</h2>
                            <h2 >{info.rating}</h2>
                            <p > Platforms:</p>
                            {info.plataform?.map(g=>{

                                return (
                                    <span key={Math.random()} >{g.platform.name} </span>
                                )
                            }) }

                          <br></br>
                          <br></br>

                          <p>Genres</p>
                          

                    

                
                   
                    <Link to={'/home'}><button >Back Home</button></Link>
                </div>
                :
                <div>
                             <img  src="https://c.tenor.com/WlKcCyNqoZwAAAAC/super-mario-mario.gif" alt="Loading"/>
                <h1 className='b'>Loading...</h1>
                
               
                    </div>
            }
        </div>
    ) 
}











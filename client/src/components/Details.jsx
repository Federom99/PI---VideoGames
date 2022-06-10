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
        <div className='m' >
            {
                
            
                info?
                <div className='nq' >
                    
                    < h2 className='detailName2' >{info.name}</h2>

                    <div> <Link to={'/home'}><button className='buttton' >Back Home</button></Link> </div>

                    <img className='im2' src={info.image} alt='img nf' />
                    <h2> Rating: {info.rating}</h2>
                            
                            <h2>Released: {info.release_date}  </h2>
                    

                    <p className='plt' > Platforms: {info.plataform?.map(g=>{

                    return (
                        <span className='span2' key={Math.random()} >{g.platform.name} </span>
                    )
                    }) } </p>
                           
                    <h2 className='descr'> Description: {info.description} </h2>
                          <br></br>
                          
                          <p>Genres</p>
                          

                    

                
                   
                    
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











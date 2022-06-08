import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { getDetails } from '../actions/index';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';


export default function Detail(){
    const dispatch = useDispatch();
    const {id} = useParams();
    
    useEffect(()=>{
        dispatch(getDetails(id))
    }, [dispatch, id])
    
    const asd = useSelector((state)=> state.videoGamesdetails);
    console.log(asd)

    return(
        <div >
            {
                asd.length > 0 ?
                <div >
                    <h1 >{asd[0].name}</h1>
                    <img  src={asd[0].image} alt='jno tiene img' />
                    <p>rating :</p>
                    <h3 >{asd[0].rating}</h3>
                    <p>released :</p>
                    <h3 >{asd[0].release_date}</h3>
                    <p>Genres :</p>
                    <h2 >{asd[0].genres.map((ele,i)=> <span key={i}>{ele.name}</span>)}</h2>
                    <div >
                            <p >Platform</p>
                            <h2 >{asd[0].plataform}</h2>
                            <p >description</p>
                            <h2 >{asd[0].description}</h2>
                    </div>

                    <Link to={'/home'}><button >Back Home</button></Link>
                </div>
                :
                <div>
                
                </div>
            }
        </div>
   ) 
}




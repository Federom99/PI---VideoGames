
import React from 'react';
export default function Paginado ({gamesPage, allGames, paginado}){
    const pageNumbers = []

    for (var i=1; i<=Math.ceil(allGames/gamesPage); i++){
        pageNumbers.push(i)
    }
    return(
                               
                <div  style={{
                    display: 'flex',
                    flexdirection: 'row',                    
                    flexWrap: 'wrap',
                    justifyContent:'center',
                    alingItems: 'center',
                    margin: '5px',                    
                    decoration: 'none'
                    
                }}
                className='paginado' >
                    
                    {pageNumbers &&                   
                     pageNumbers.map ( number => (
                            <ul 
                                className='number' key={number} >
                                <button onClick={() => paginado(number)}>{ number }</button>
                            </ul>
                     )) }

                </div>
        

    )

}
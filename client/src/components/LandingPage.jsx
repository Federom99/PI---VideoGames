import React from "react";


import '../styles/LandingStyle.css';

 export default function LandingPage (){
    return (
        <div className="bgfl">
            <h2 className="wlc">Welcome</h2>
        
            <a class="coolBeans" href="/home">Go Home</a>
            {/* <Link to = '/home'>   
            <br /><br /><br /> 
            <button src='/Home'>INGRESAR</button>
            <br/><br/><br/>
            </Link> */}
        </div>
    )
}
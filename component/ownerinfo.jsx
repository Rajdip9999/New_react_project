import React,{useState,useEffect} from "react";

import './ownerInfo.css'


const App = ()=>{
    const [name,setName]= useState('')

    return(
        <>
        <div className="maindiv">
            <div className="childdiv">
                <div className="profilephoto">
                    <img src ='/ 'alt='Logo'></img>
                </div>
            </div>
        </div>
        </>
    )
}


export default App
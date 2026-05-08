import React from 'react'
import { useState } from 'react'
import '../component/nav.css'


const App =({navlist})=>{
    const[name,setName]=useState(0)

    return(
        <>
        <div className='navbar'>
            <div className='logo'><span>Raas' Garment</span></div>
            <ul>
                  {navlist.map((e)=>{
                   return <li key={e}><a href='#'>{e}</a></li>
                })}
            </ul>
        </div>
        
        </>
    )
}

export default App
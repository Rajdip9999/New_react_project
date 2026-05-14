import React from 'react'
import { useState } from 'react'
import '../component/nav.css'


const App =({navlist,logoText})=>{
    const[name,setName]=useState(0)

    return(
        <>
        <div className='navbar'>
            <div className='logo'><span>{logoText}</span></div>
            <ul>
                  {navlist.map((e)=>{
                   return <li key={e}><a href='/'>{e}</a></li>
                })}
            </ul>
        </div>
        
        </>
    )
}

export default App
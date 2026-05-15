import React from 'react'
import { useState } from 'react'
import '../component/nav.css'


const App =({logoText})=>{
    const[name,setName]=useState(0)

    return(
        <>
        <div className='navbar'>
            <div className='logo'>
<span>{logoText}</span>

</div>
            <ul>
                 <li><a href='/'>Home</a></li>
                 <li><a href='/contact'>Footer</a></li>
            </ul>
        </div>
        
        </>
    )
}

export default App
import React from 'react'
import { useState, useEffect } from 'react'
import '../component/nav.css'
import { IoMenu } from "react-icons/io5";



const App = ({ logoText }) => {
    const [name, setName] = useState(0)
    const [open, setOpen] = useState(false)

    // useEffect(()=>{
    const raaz = () => {
      setOpen(!open)

    }
    // },[])

    return (
        <>
            <div className='navbar'>
                <div className='logo'>
                    <span>{logoText}</span>
                </div>
                <button className='menuBtn' onClick={raaz}><IoMenu/></button>
                { open &&
                    <ul className='ulList'>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/contact'>Footer</a></li>
                </ul>}
            </div>

        </>
    )
}

export default App
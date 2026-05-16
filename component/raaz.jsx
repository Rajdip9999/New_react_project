import React, { useState, useEffect } from 'react'
import { CiSearch } from "react-icons/ci";

import './raaz.css'

const App = () => {

    const [wpid, setWpid] = useState("")
    const [userdata, setUserdata] = useState()
    const [typingText, setTypingText] = useState("")

    const raaz = async (e) => {

        e.preventDefault()

        try {

            const urldata = await fetch(
                `https://server-backend-1-1nf0.onrender.com/?wpid=${wpid}`
            )

            const raazdata = await urldata.json()

            setUserdata(raazdata)

            if (raazdata !== null) {
                localStorage.setItem('info', JSON.stringify(raazdata))
            }

        }

        catch (err) {
            console.log(err.message)
        }

    }


    // LocalStorage Data
    useEffect(() => {

        const data = localStorage.getItem('info')

        if (data) {

            const convt = JSON.parse(data)

            setWpid(convt.weplayid)
        }

    }, [])



    // Typing Animation
    useEffect(() => {

const navbar= document.querySelector(".maindiv")

setTypingText("")

        let fullText = "Searching Your Profile..."

        if (userdata === null) {

            fullText = "User Not Found"
alert("User Not Found")

        }

        else if (!userdata) {

            fullText = "Enter Your WePlay ID"

        }

        else {

            fullText = `Welcome ${userdata?.name}`

if(userdata?.name){
  navbar.classList.add('fixe')
}

if(userdata?.message){
 alert(`${userdata?.message}`)
}

        }

        let index = 0

        const interval = setInterval(() => {

            setTypingText(fullText.slice(0, index + 1))

            index++

            if (index === fullText.length) {

                clearInterval(interval)

            }

        }, 100)

        return () => clearInterval(interval)

    }, [userdata])



    return (

        <>

            <div className='maindiv'>


                <h1>{typingText}</h1>

            </div>

            <div className='fromdiv'>

                <form onSubmit={raaz}>

                    <input
                        type='number'
                        placeholder='input your wpid'
                        required
                        value={wpid}
                        onChange={(e) => setWpid(e.target.value)}
                    />

                    <div className='dtndiv'>

                        <button type='submit' className='btn'>
                            Search <CiSearch />
                        </button>

                    </div>

                </form>

            </div>



            {userdata ?

                <div className='infodiv'>

                    <div className='info'>
                        <p>Weplay Id {userdata?.weplayid}</p>
                    </div>

                    <div className='info'>
                        <p>Charms {userdata?.charm}</p>
                    </div>

                    <div className='info'>
                        <p>Signature is {userdata?.signature}</p>
                    </div>

                    <div className='info'>
                        <p>BFF Number {userdata?.bff}</p>
                    </div>

                    <div className='info'>
                        <p>Total gifts {userdata?.gift}</p>
                    </div>

                    <div className='info'>
                        <p>Total moments {userdata?.moments}</p>
                    </div>

                    <div className='info'>
                        <p>Total Star {userdata?.star}</p>
                    </div>

                    <div className='info'>
                        <p>Time {userdata?.time}</p>
                    </div>

                    <div className='info'>
                        <p>Date {userdata?.date}</p>
                    </div>

                    <div className='info'>
                        <p>Family Name {userdata?.family}</p>
                    </div>

                    {userdata.message?  
                    
                    <div className='info'>
                        <p>{userdata?.message}</p>


                    </div>:null}
                    

                </div>

                : null}

        </>

    )

}

export default App
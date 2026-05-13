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

        let fullText = ""

        if (userdata === null) {

            fullText = "You Are Not My Friend"

        }

        else if (!userdata) {

            fullText = "Please enter Wpid"

        }

        else {

            fullText = `My Name Is ${userdata?.name}`

        }

        let index = 0

        setTypingText("")

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
                        <p>My weplay id is {userdata?.weplayid}</p>
                    </div>

                    <div className='info'>
                        <p>My Charms is {userdata?.charm}</p>
                    </div>

                    <div className='info'>
                        <p>My Signature is {userdata?.signature}</p>
                    </div>

                    <div className='info'>
                        <p>My bff Number is {userdata?.bff}</p>
                    </div>

                    <div className='info'>
                        <p>My gifts is {userdata?.gift}</p>
                    </div>

                    <div className='info'>
                        <p>My moments is {userdata?.moments}</p>
                    </div>

                    <div className='info'>
                        <p>My star is {userdata?.star}</p>
                    </div>

                    <div className='info'>
                        <p>Time is {userdata?.time}</p>
                    </div>

                    <div className='info'>
                        <p>Date is {userdata?.date}</p>
                    </div>

                    <div className='info'>
                        <p>My Family name is {userdata?.family}</p>
                    </div>

                </div>

                : null}

        </>

    )

}

export default App
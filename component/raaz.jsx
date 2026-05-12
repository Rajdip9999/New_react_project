import React, { useState,useEffect } from 'react'

import './raaz.css'

const App = () => {

    const [wpid, setWpid] = useState("")
    const [userdata, setUserdata] = useState(null)

    const raaz = async (e) => {

        // const wep = Number(wp)

        e.preventDefault()

        try {


            const urldata = await fetch(
                `https://server-backend-1-1nf0.onrender.com/?wpid=${wpid}`
            )

            const raazdata = await urldata.json()

            setUserdata(raazdata)

        }


        catch (err) {
            console.log(err.message)
        }


    }

    useEffect(()=>{
        setTimeout(() => {
            document.title="Please enter weplay id on Input"
        }, 5000);
    },[])



    return (

        <>

        <div className='maindiv'>
            {!userdata
                ? <h1>Please enter wpid</h1>
                : <h1>My Name Is {userdata?.name}</h1>
            }

            </div>

            <form onSubmit={raaz}>

                <input
                    type='text'
                    placeholder='input your wpid'
                    required
                    value={wpid}
                    onChange={(e) => setWpid(e.target.value)}
                />

                <div className='dtndiv'>

                <button type='submit' className='btn'>
                    Please Enter
                </button>

                </div>

            </form>


            {userdata && (
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
            )}

        </>

    )

}

export default App
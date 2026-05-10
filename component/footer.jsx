import React from "react";
import Modi from '../public/modi.png'
import Mamata from '../public/mamata.png'
import './footer.css'


const App = () => {
    return (
        <div>
            <div className="footer">
                <div className="left">
                    <div className="leftImg">
                        <img src={Modi} alt="norendra"></img>
                    </div>
                    <h1>Narendra Modi</h1>
                    <p>Prime Minister of India</p>
                </div>
                <div className="right">
                    <div className="rightImg">
                        <img src={Mamata} alt="Mamta"></img>
                    </div>
                    <h1>Mamata Banerjee</h1>
                    <p> EX- Chief Minister of West Bengal
                    </p>
                </div>

            </div>
        </div>
    )
}

export default App
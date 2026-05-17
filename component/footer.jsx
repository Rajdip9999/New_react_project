import React from "react";
import './footer.css'


const App = ({userInfo}) => {

    console.log(userInfo.url_profile)

    return (
        <div>
            <div className="footer">
                <div className="left">
                    <div className="leftImg">
                        {userInfo.url?
                        <img src={userInfo.url} alt="norendra"></img>
                        :<img src='/modi.png' alt="norendra"></img>}
                    </div>
                   {userInfo? <h1>{userInfo?.name}</h1>:<h1>Norendra Modi</h1>}
                    <p>Prime Minister of India</p>
                </div>
                <div className="right">
                    <div className="rightImg">
                        <img src="mamata.png" alt="Mamta"></img>
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
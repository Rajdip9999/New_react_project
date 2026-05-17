import React from "react";
import './footer.css'


const App = ({ userInfo }) => {

    return (
        <div>
            <div className="footer">
                <div className="left">
                    <div className="leftImg">
                        {userInfo.url ?
                            <img src={userInfo.url} alt={userInfo?.name + 'Photo'}></img>
                            : <img src='/modi.png' alt="norendra"></img>}
                    </div>
                    {userInfo ? <h1>{userInfo?.name}</h1> : <h1>Norendra Modi</h1>}
                    <p> Hii {userInfo?.name}</p>
                </div>
            </div>
        </div>
    )
}

export default App
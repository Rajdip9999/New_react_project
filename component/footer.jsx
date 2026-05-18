import React from "react";
import './footer.css'

const App = ({ userInfo }) => {

    return (
        <div>
            <div className="footer">
                <div className="left">

                    <div className="leftImg">
                        <img
                            src={userInfo?.url || '/modi.png'}
                            alt={userInfo?.name ? `${userInfo.name} Photo` : 'Norendra Modi'}
                        />
                    </div>

                    <h1>{userInfo?.name || 'Norendra Modi'}</h1>

                    <p>
                        Hii {userInfo?.name || 'Guest'}
                    </p>

                </div>
            </div>
        </div>
    )
}

export default App
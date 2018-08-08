import React from 'react';
import "../comp_styles/hero.css";
// import RegistrationPage from './registration-page';

class MainSection extends React.Component {

    render() {
        return (
            <div>
                <div className="hero-section">
                    <div className="hero-section-text">
                        {/* <div>
                            <img
                                className="mainIcon2"
                                alt="whale icon"
                                src={require("../assets/whale.png")} />
                        </div> */}
                        <div className="company2">
                            <p>mobi</p>
                        </div>
                        <h5>Your all in one platform to keep track of what matters the most. Your next Career</h5>
                    </div>
                </div>
            </div>
        )


    }
}

export default MainSection
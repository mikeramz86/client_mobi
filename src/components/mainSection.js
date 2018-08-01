import React, { Component } from 'react';
import "../comp_styles/mainSection.css";
import RegistrationPage from './registration-page';

class MainSection extends React.Component {

    render() {
        return(
            <div>
                <section className="mainSection">
                    <div className="mainBlock">
                        <div className="mainIconContain">
                            <img
                                className="mainIcon"
                                alt="whale icon"
                                src={require("../assets/whale.png")} />
                        </div>
                    </div>
                    <div className="mainBlock">
                        <h2 className="mainContent">mobi</h2>
                        <div className="mainContent">You're all in one platform to keep track of what matters the most. You're next Career</div>
                    </div>
                    <div className="mainBlock">
                        <RegistrationPage/>
                    </div>
                </section>
            </div>
        )
        

    }
}

export default MainSection
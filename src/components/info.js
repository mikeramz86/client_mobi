import React, { Component } from 'react';
import "../comp_styles/info.css"

class InfoSection extends React.Component {

    render() {
        return(
            <div>
                <section className="explainSection">
                    <div className="explainBlock">
                        <div className="explainIconContain">
                            <img
                                className="explainIcon"
                                alt="compass icon"
                                src={require("../assets/compass.png")} />
                        </div>
                        <div className="explainContent"><b>Navigate:</b>Mobi allows you to see all the jobs you are actively applying for.</div>
                    </div>
                    <div className="explainBlock">
                        <div className="explainIconContain">
                            <img
                                className="explainIcon"
                                alt="Harpoon icon"
                                src={require("../assets/harpoon.png")} />
                        </div>
                        <div className="explainContent"><b>Lock in:</b> Dive deeper into each job to see more details to help you succeed.</div>
                    </div>
                    <div className="explainBlock">
                        <div className="explainIconContain">
                            <img
                                className="explainIcon"
                                alt="anchor icon"
                                src={require("../assets/anchor.png")} />
                        </div>
                        <div className="explainContent"><b>Anchor yourself:</b> Job hunting can be overwhelming. Mobi is the perfect tool in searching for you next job</div>
                    </div>
                </section>
            </div>
        )
        

    }
}

export default InfoSection
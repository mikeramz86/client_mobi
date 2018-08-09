import React, { Component } from 'react';
import "../comp_styles/info.css"

class InfoSection extends React.Component {

    render() {
        return(
            <div className="section group">
                <div className="col span_1_of_3">
                    <img
                    className="explainIcon"
                    alt="compass icon"
                    src={require("../assets/compass.png")} />
                    <h4>Navigate</h4>
                    <div className="explainContent">Mobi allows you to see all the jobs you are actively applying for.</div>

                </div>
                <div className="col span_1_of_3">
                    <img
                    className="explainIcon"
                    alt="Harpoon icon"
                    src={require("../assets/harpoon.png")} />
                    <h4>Lock In</h4>
                    <div className="explainContent">Dive deeper into each job to see more details to help you succeed.</div>

                </div>
                <div className="col span_1_of_3">
                    <img
                    className="explainIcon"
                    alt="anchor icon"
                    src={require("../assets/anchor.png")} />
                    <h4>Anchor Yourself</h4>
                    <div className="explainContent">Job hunting can be overwhelming. Use Mobi to keep you on the right path</div>

                </div>
            </div>
        )
        

    }
}

export default InfoSection


{/* <div>
<section className="section group">
    <div className="col span_1_of_3">
        <div className="explainIconContain">
            <img
                className="explainIcon"
                alt="compass icon"
                src={require("../assets/compass.png")} />
        </div>
        <div className="explainContent"><b>Navigate:</b>Mobi allows you to see all the jobs you are actively applying for.</div>
    </div>
    <div className="col span_1_of_3">
        <div className="explainIconContain">
            <img
                className="explainIcon"
                alt="Harpoon icon"
                src={require("../assets/harpoon.png")} />
        </div>
        <div className="explainContent"><b>Lock in:</b> Dive deeper into each job to see more details to help you succeed.</div>
    </div>
    <div className="col span_1_of_3">
        <div className="explainIconContain">
            <img
                className="explainIcon"
                alt="anchor icon"
                src={require("../assets/anchor.png")} />
        </div>
        <div className="explainContent"><b>Anchor yourself:</b> Job hunting can be overwhelming. Mobi is the perfect tool in searching for you next job</div>
    </div>
</section>
</div> */}
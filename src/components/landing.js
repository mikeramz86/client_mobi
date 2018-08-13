
import React from 'react';
import {connect} from 'react-redux';
import { Redirect} from 'react-router-dom';
import InfoSection from './info';
import Footer from './footer';
import Hero from './hero';


export function Landing(props) {
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <div className="home">
            <Hero/>
            <InfoSection/>
            <Footer/>

        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Landing);




import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

// import RegistrationPage from './components/registration-page';
import InfoSection from './info';
import Footer from './footer';
import MainSection from './mainSection';


export function Landing(props) {
    // If we are logged in redirect straight to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <div className="home">

            <MainSection/>            
            <InfoSection/>
            <Footer/>

        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Landing);



// class Landing extends React.Component {
//   render() {
//     return (
//           <div className="App">

//             <MainSection/>
            
//             <InfoSection/>

//             <Footer/>


//           </div>
//     );
//   }
// }

// export default Landing;


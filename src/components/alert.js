import React from "react";
import "../comp_styles/alert.css";




export class Alert extends React.Component {

    render() {
        console.log('alerting');
        if (this.props.display ) {
            return (
                <div className="alert">
                    {this.props.el}
                    <button className="alertbtn" Click={this.props.requestClose}>Close</button>
                </div>
            )
        } else {
            return (
                <div></div>
            )
        }
    }
}

export default Alert
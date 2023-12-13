import React from "react";
import "./Logo.css"
class Logo extends React.Component{
    render(){
        return(<a href={window.location.hostname}><img className="logo" src={this.props.src}></img></a>)
    }
}
export default Logo
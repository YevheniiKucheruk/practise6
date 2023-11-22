import React from "react";
import "./Content.css"
class Content extends React.Component{
    render(){
        return (<div className="content">{this.props.text}</div>)
    }
}

export default Content
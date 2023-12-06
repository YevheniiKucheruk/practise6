import React from "react";
import getID from "./helper";

class MenuItem extends React.Component{
    render(){
        const url = this.props.url
        const text = this.props.text
        const id = getID('menu-item')
        return(<li id={id}>
            {url?
            (<a href={url} target={url === window.location.hostname ? '_self' : '_blank'} rel="noopener noreferrer">{text}</a>):(<span>{text}</span>)}
            </li>)
    }
}
export default MenuItem
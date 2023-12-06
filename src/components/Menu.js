import React from "react";
import MenuItem from "./MenuItem";
class Menu extends React.Component{
    render(){
        const list = this.props.list
        return (<ul>{list.map((item,index)=>
            (<MenuItem text = {item.text} url = {item.url} />))
            }</ul>)
    }
}
export default Menu
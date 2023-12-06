import React from "react";
import "./SideBar.css"
import Menu from "./Menu";
class SideBar extends React.Component{
    render(){
        const listA = [{text: "hello", url: "/hello"},{text: "my name is"},{text: "Zhenya", url: "https://w3schoolsua.github.io/css/css_selectors.html"}]
        return(
            <div className="sidebar">
                <Menu list = {listA} />
            </div>
        )
    }
}

export default SideBar
import React from "react";
import './Footer.css'
import Menu from "./Menu";
class Footer extends React.Component{
    render(){
        const listB = [{text: "hello", url: "/hello"},{text: "my name is"},{text: "Zhenya", url: "/name"}]
        return (<footer className="footer1">
            <Menu list = {listB} />
        </footer>)
    }
}

export default Footer
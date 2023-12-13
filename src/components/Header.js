import React from "react";
import './Header.css' 
import Logo from "./Logo";
import DateTime from "./DateTime";
class Header extends React.Component{
    render(){
        return(<header className="header"><Logo src = "https://th-thumbnailer.cdn-si-edu.com/bgmkh2ypz03IkiRR50I-UMaqUQc=/1000x750/filters:no_upscale():focal(1061x707:1062x708)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer_public/55/95/55958815-3a8a-4032-ac7a-ff8c8ec8898a/gettyimages-1067956982.jpg"/>{this.props.title}
        <DateTime/></header>)
    }
}

export default Header
import React from "react";
import Highbar from "./highbar";
import Bottombar from "./bottombar";
import logo from '../images/logo-smartain.png';
import '../css/telaMenu.css'


function TelaMenu() {
    return (
        <div className="">
            <Highbar/>
            <div className="container">
                <img src={logo} alt="logo"/>
            </div>
            <Bottombar/>
        </div>
    );
}

export default TelaMenu;

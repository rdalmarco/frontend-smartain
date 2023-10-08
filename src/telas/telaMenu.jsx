import React from "react";
import Highbar from "../componentes/highbar";
import Bottombar from "../componentes/bottombar";
import logo from '../images/logo-smartain.png';
import '../css/telaMenu.css'


function TelaMenu() {
    return (
        <div className="">
            <Highbar/>
            <div className="containerMenu">
                <img src={logo} alt="logo"/>
            </div>
            <Bottombar/>
        </div>
    );
}

export default TelaMenu;

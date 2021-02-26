import loading from "../../../images/loading.gif";
import React from "react";
import s from './Preloader.module.css'


const Preloader = (props) =>{

    return <div >
        <img src={loading} alt="###"/>
    </div>
}

export default Preloader;
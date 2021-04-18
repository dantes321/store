import React, {useEffect, useState} from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import Header from "./components/Header/Header";
import NewBox from "./components/NewBox/NewBox";
import Navbar from "./components/Navbar/Navbar";
import StoreContainer from "./components/Store/StoreContainer";
import Original from "./components/Original/Original";
import OriginalBoxContainer from "./components/OriginalBox/OriginalBoxContainer";
import ModalWindow from "./components/ModalWindow/ModalWindow";




const App = (props) => {

    return <div>

        <Header />
       <div className='app-wrapper'>

            <NewBox />
            <StoreContainer />
            <Navbar />
            <Original />
            <OriginalBoxContainer/>

       </div>
    </div>
}

export default App;
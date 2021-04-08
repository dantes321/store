import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route,BrowserRouter} from "react-router-dom";
import Header from "./components/Header/Header";
import Slider from "./components/Slider/Slider";
import Description from "./components/Description/Description";
import Store from "./components/Store/Store";
import CreateBox from "./components/CreateBox/CreateBox";



const App = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header />
                <Slider />
                <Description />
                <Store />
                <CreateBox />
            </div>
        </BrowserRouter>
    )
}

export default App;
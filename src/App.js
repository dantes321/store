import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route,BrowserRouter} from "react-router-dom";
import Header from "./components/Header/Header";
import Slider from "./components/Slider/Slider";
import Description from "./components/Description/Description";



const App = (props) => {

    return (
        <BrowserRouter>

                <Header />
                <Slider />
                <Description />
        </BrowserRouter>
    )
}

export default App;
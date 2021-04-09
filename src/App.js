import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route,BrowserRouter} from "react-router-dom";
import Header from "./components/Header/Header";
import Slider from "./components/Slider/Slider";
import Description from "./components/Description/Description";
import Store from "./components/Store/Store";
import CreateBox from "./components/CreateBox/CreateBox";
import Conditions from "./components/Conditions/Conditions";
import Footer from "./components/Footer/Footer";
import CreateOwnBox from "./components/CreateOwnBox/CreateOwnBox";



const App = (props) => {

    return (
        <BrowserRouter>
            <Header />
            <div className='app-wrapper'>
                <Route path='/home' render={() => <Slider /> }/>
                <Route path='/home' render={() => <Description /> }/>
                <Route path='/home' render={() => <Store /> }/>
                <Route path='/home' render={() => <CreateBox />}/>
                <Route path='/home' render={() => <Conditions />}/>
                <Route path='/home' render={() => <Footer />}/>
                <Route path = '/createbox' render={() => <CreateOwnBox />}/>
            </div>
        </BrowserRouter>
    )
}

export default App;
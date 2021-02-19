import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header/Header.jsx";
import Profile from "./components/Profile/Profile";
import {Route,BrowserRouter} from "react-router-dom";


const App = (props) => {
    return (
        <BrowserRouter>
        <div className='app-wrapper'>
            <Header/>

            <div className="app-wrapper-content">

                <Route path='/profile' render={() => <Profile dispatch ={props.dispatch} state={props.state}/>}/>

            </div>

        </div>
        </BrowserRouter>
    )

}

export default App;

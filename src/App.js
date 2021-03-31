import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route,BrowserRouter} from "react-router-dom";
import AuthPage from "./components/AuthPage/AuthPage";



const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <AuthPage />

            </div>
        </BrowserRouter>
    )
}

export default App;
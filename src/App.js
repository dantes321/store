import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route,BrowserRouter} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import AuthPageContainer from "./components/AuthPage/AuthPageContainer";
import Profile from "./components/Profile/Profile";
import Friends from "./components/Friends/Friends";




const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Navbar />
                <Route path='/auth' render={() => <AuthPageContainer />}/>
                <Route path='/profile' render={() => <Profile />}/>
                <Route path='/friends' render={() => <Friends />}/>


            </div>
        </BrowserRouter>
    )
}

export default App;
import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Store from "./components/Store/Store";
import Cart from "./components/Cart/Cart";
import {Route, BrowserRouter} from "react-router-dom";
import About from "./components/About/About";
import 'bootstrap/dist/css/bootstrap.min.css';


const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <div>

                    <Navbar store ={props.store}/>

                    <div className='app-wrapper-content'>
                        <Route exact path='/' render={() => <Store store ={props.store}/>} />
                        <Route path='/cart' render={() => <Cart store ={props.store} />} />
                        <Route path='/about' render={() => <About />} />
                    </div>

                </div>
            </div>
        </BrowserRouter>
)

}

export default App;

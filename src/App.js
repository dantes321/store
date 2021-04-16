import React, {useEffect} from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Header from "./components/Header/Header";
import NewBox from "./components/NewBox/NewBox";
import Navbar from "./components/Navbar/Navbar";
import Store from "./components/Store/Store";
import StoreContainer from "./components/Store/StoreContainer";

const App = (props) => {

    return (
       <div className='app-wrapper'>

            <Header />
            <NewBox />
            <StoreContainer />
            <Navbar />
       </div>
    )
}

export default App;
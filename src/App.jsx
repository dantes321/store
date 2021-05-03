import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import Header from './components/Header/Header';
import NewBox from './components/NewBox/NewBox';
import Navbar from './components/Navbar/Navbar';
import Original from './components/Original/Original';
import Store from './components/Store/Store';
import OriginalBox from './components/OriginalBox/OriginalBox';
import { StoreProvider } from './context/store-context';
import { OriginalBoxProvider } from './context/originalBox-context';


const App = () => (
  <div>
    <Header />
    <div className='app-wrapper'>
      <NewBox />
      <StoreProvider>
        <Store />
      </StoreProvider>
      <Navbar />
      <Original />
      <OriginalBoxProvider>
        <OriginalBox />
        
      </OriginalBoxProvider>
    </div>
  </div>
);

export default App;

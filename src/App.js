import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/navbar';
import {action,originals } from './urls';
import React from 'react';
import Banner from './components/Banner/Banner';
import RowPost from './components/RowPost/RowPost';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Banner/>
    <RowPost url={originals} title='Netflix Orginals'/>
    <RowPost url={action} title='Action' isSmall={true}/>
    </div>
  );
}

export default App;

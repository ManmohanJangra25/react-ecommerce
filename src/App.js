import React from 'react';
import Header from './Components/UI/Header';
import HeroSection from './Components/UI/Layout/HeroSection';

import './App.css';

const navArray = ['Home', 'New', 'Category'];

function App() {
  return (
    <React.Fragment>
      <Header navbarArray={navArray}/>
      <HeroSection />
    </React.Fragment>
  );
}

export default App;

import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import Display from './components/Display/Display.jsx';
import SearchComponent from './components/SearchComponent/SearchComponent.jsx';

const App = () => {
 return (
  <>
  <Navbar/>
  <SearchComponent/>
  <Display/>
</>
 )
};

export default App;

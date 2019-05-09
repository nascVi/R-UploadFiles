import React from 'react';
import { render } from 'react-dom'
import SMap from './containers/SMap/SMap'
import Hero from './containers/SHero/SHero'
import Sservices from './containers/Sservices/Sservices'
import FileUpload from './components/FileUpload';
import ThanosReact from './components/Image/Thanos-React'
import './App.css';

const App = () => (

<div className='container mt-4'>
  
  <h1>Refonte Varela Electricite</h1>
  <Hero />
  <Sservices />
  <SMap />

  {/*Moke apps for the smart contract inner build from h4*/}
  <h4 className='display-4 text-center mb-4'>
    <i className='fab fa-react'/> R-Upload File
  </h4>

  <FileUpload />
  <ThanosReact />
</div>
);

export default App;

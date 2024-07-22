import logo from './logo.svg';
import { Helmet } from 'react-helmet';
import './styles/styles.css';
import Header from './components/Header';
import Main from './components/Main';
import Grid from './components/Grid';
import Sschess from './components/Sschess';
import BarraLinks from './components/BarraLinks';
import LineaVertical from './components/LineaVertical'
import React from 'react';
import ParrafoPersonal from './components/ParrafoPersonal';
import GraficosEstadistica from './components/GraficosEstadistica';



function App() {
  return (
    <div className="App">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <Helmet>
          <title>Martín Osan: the Website</title>
        </Helmet>
        <BarraLinks />  
        <Header />  
        <div className='cuerpo'>  
          <div className="wrapper">
              <Sschess />
          </div> 
        </div>   
    </div>
  );
}

export default App;

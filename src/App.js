import React from 'react';
import './App.css';
import TipCalculator from './containers/TipCalculator';
import initModel from './model/model';

function App() {
  return (
    <TipCalculator initModel={initModel} />
  );
}

export default App;

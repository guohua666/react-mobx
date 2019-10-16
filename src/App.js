import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import route from './router'
import MapRoute from './router/mapRouter'
import './App.css';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <MapRoute route={route}></MapRoute>
    </BrowserRouter>
    </div>
  );
}

export default App;

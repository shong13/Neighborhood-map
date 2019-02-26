import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar';
import Places from './Places';
import Map from './Map'

class App extends Component {
  render() {
    return (
      <div>
        <Map/>
      </div>
    );
  }
}

export default App;

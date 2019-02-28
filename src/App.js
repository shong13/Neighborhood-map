import React, { Component } from 'react';
import './App.css';
import Map from './Map'
import ErrorBoundary from './ErrorBoundary'

class App extends Component {
  render() {
    return (
      <div tabIndex="-1">
        <ErrorBoundary>
        	<Map/>
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;

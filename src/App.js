import React, { Component } from 'react';
import { Card } from './Card.js';
import { Button } from './Button.js';
import { Input } from './Input.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <main className="LoginPage">
        <Card />
      </main>
    );
  }
}

export default App; 
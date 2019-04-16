import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Example from "./components/Hooks"
import Effects from "./components/Effects"
import Context from "./components/Context"
import Likes from "./components/Likes"
class App extends Component {

  
  render() {
    return (
      <div className="App">
      <h1>Hooks</h1>
       <Example />
       <h1>Hooks- Effects</h1>
       <Effects />
       <h1>Context</h1>
       <Context />
       <h1>Likes</h1>
       <Likes/>
      </div>
    );
  }
}

export default App;

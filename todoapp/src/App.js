import React, { Component } from 'react';
import MainForm from './MainForm';
import './_styles/page-styles.css';

class App extends Component {
  render() {
    return (
      <div className="todo-app">
        <h1 className="header">todos</h1>
        <MainForm />
      </div>
    )
  }
}

export default App;

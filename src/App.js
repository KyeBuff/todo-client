import React, { Component } from 'react';
import Header from './components/Header';
import AddTaskForm from './components/forms/AddTaskForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       	<Header />
       	<AddTaskForm />
      </div>
    );
  }
}

export default App;

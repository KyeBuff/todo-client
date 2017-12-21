import React, { Component } from 'react';
import Header from './components/Header';
import AddTaskForm from './components/forms/AddTaskForm';
import ListTabs  from './components/ListTabs';
import ListAll  from './containers/ListAll';
import ListToDo  from './containers/ListToDo';
import ListComplete  from './containers/ListComplete';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import FourOhFour from './components/FourOhFour';

class App extends Component {
  render() {
    return (
      <div className="App">
       	<Header />
       	<AddTaskForm />
       	<ListTabs />
       	<Switch>
       		<Route exact path="/" component={ListAll}/>
					<Route path="/todo" component={ListToDo}/>
       		<Route path="/complete" component={ListComplete}/>
       		<FourOhFour />
       	</Switch>
      </div>
    );
  }
}

export default App;

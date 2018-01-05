import React, { Component } from 'react';
import Select from './Select';

const options = [
  {
    value: 0,
    disabled: true,
    text: "Priority",
  },
  {
    value: 1,
    disabled: false,
    text: "Low",
  },
  {
    value: 2,
    disabled: false,
    text: "Med",
  },
  {
    value: 3,
    disabled: false,
    text: "High",
  },
];

class AddTaskForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      taskName: "",
      priority: 0,
    }

    this.onSubmit = this.onSubmit.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
    this.onPriorityChange = this.onPriorityChange.bind(this);
  }

  onNameChange(e) {
    const taskName = e.target.value;

    this.setState({taskName});
  }

  onPriorityChange(e) {
    const priority = e.target.options.selectedIndex;

    this.setState({priority});

  }

  onSubmit(e) {
    e.preventDefault();

    const task = {
      task: this.state.taskName,
      //db col is nullable
      priority: this.state.priority || null,
    }

    if(this.state.taskName) {
      this.props.onAddTask(task);
    }

    this.setState({taskName: "", priority: 0});
  }

  render() {
    return (
      <form className="task-form" onSubmit={this.onSubmit}>
        <input 
          className="task-input" 
          type="text" 
          value={this.state.taskName} 
          onChange={this.onNameChange} 
          placeholder="Add a task..."
        />
        <Select 
          className="task-select" 
          onChange={this.onPriorityChange} 
          value={this.state.priority}
          options={options}
        />
        <input className="task-submit" type="submit" value="Add" />
      </form>
    )
  }
}



export default AddTaskForm;

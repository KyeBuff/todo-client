import React, { Component } from 'react';

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
    const priority = e.target.options.selectedIndex + 1;

    this.setState({priority});

  }

  onSubmit(e) {
    e.preventDefault();

    const task = {
      task: this.state.taskName,
      priority: this.state.priority || null,
    }

    this.props.onAddTask(task);
  }

  render() {
    return (
      <form className="task-form" onSubmit={this.onSubmit}>
        <input className="task-input" type="text" value={this.state.taskName} onChange={this.onNameChange}/>
        <select className="task-select" onChange={this.onPriorityChange} value={this.state.priority}>
          <option value={0} disabled>Priority</option>
          <option value={1}>Low</option>
          <option value={2}>Med</option>
          <option value={3}>High</option>
        </select>
        <input className="task-submit" type="submit" value="+" />
      </form>
    )
  }
}

export default AddTaskForm;

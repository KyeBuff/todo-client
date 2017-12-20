import React, { Component } from 'react';

class AddTaskForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      taskName: "",
    }

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" value={this.state.taskName}/>
        <select>
          <option>Low</option>
          <option>Med</option>
          <option>High</option>
        </select>
        <input type="submit" value="+" />
      </form>
    )
  }
}

export default AddTaskForm;

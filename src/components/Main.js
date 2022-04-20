import React, { Component } from "react";
import './Main.css';
import { FaPlus } from 'react-icons/fa';

import { FaPencilAlt, FaWindowClose } from 'react-icons/fa';

export default class Main extends Component {
  state = {
    newTask: '',
    tasks: []
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { tasks } = this.state;
    let { newTask } = this.state;
    newTask = newTask.trim();

    if (tasks.indexOf(newTask) !== -1) {
      return;
    }

    const newTasks = [...tasks];
    this.setState({
      tasks: [...newTasks,newTask],
    });
  }

  handleChanges = (event) => {
    this.setState({
      newTask: event.target.value,
    })
  }

  render() {
    const { newTask, tasks } = this.state;

    return (
      <div className="main">
        <h1>Task list</h1>

        <form onSubmit={this.handleSubmit} action="#" className="form">
          <input onChange={this.handleChanges} type="text" value={newTask} />
          <button type="submit">
            <FaPlus size={20} />
          </button>
        </form>

        <ul className="tasks">
          {tasks.map(task => (
            <li key={task}>
              {task}
              <span>
                <FaPencilAlt className="edit" />
                <FaWindowClose className="delete" />
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

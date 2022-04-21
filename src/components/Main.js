import React, { Component } from "react";
import './Main.css';
import { FaPlus } from 'react-icons/fa';

import { FaPencilAlt, FaWindowClose } from 'react-icons/fa';

export default class Main extends Component {
  state = {
    newTask: '',
    tasks: [],
    editing: -1
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { tasks, editing } = this.state;
    let { newTask } = this.state;
    newTask = newTask.trim();

    if(newTask.length<3){
      return;
    }

    if (tasks.indexOf(newTask) !== -1) {
      return;
    }

    const newTasks = [...tasks];

    if (editing === -1) {
      this.setState({
        tasks: [...newTasks, newTask],
        newTask: '',
      });
    } else {
      newTasks[editing] = newTask;

      this.setState({
        tasks: [...newTasks],
        editing: -1,
      });
    }
  }

  handleChanges = (event) => {
    this.setState({
      newTask: event.target.value,
    })
  }

  handleDelete = (event, index) => {
    const { tasks } = this.state;
    const newTasks = [...tasks];

    newTasks.splice(index, 1);

    this.setState({
      tasks: [...newTasks],
    })
  }

  handleEdit = (event, index) => {
    const { tasks } = this.state;

    this.setState({
      editing: index,
      newTask: tasks[index],
    });
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
          {tasks.map((task, index) => (
            <li key={task}>
              {task}
              <span>
                <FaPencilAlt onClick={(e) => this.handleEdit(e, index)} className="edit" />
                <FaWindowClose onClick={(e) => this.handleDelete(e, index)} className="delete" />
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

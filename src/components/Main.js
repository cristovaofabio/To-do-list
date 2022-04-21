import React, { Component } from "react";
import './Main.css';
import Form from "./Form";
import Tasks from "./Tasks";

export default class Main extends Component {
  state = {
    newTask: '',
    tasks: [],
    editing: -1
  };

  componentDidMount() {
    const tasks = JSON.parse(localStorage.getItem('tasks'));

    if (!tasks) return;

    this.setState({ tasks });
  }

  componentDidUpdate(prevProps, prevState) {
    const { tasks } = this.state;

    if (tasks === prevState.tasks) return;

    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { tasks, editing } = this.state;
    let { newTask } = this.state;
    newTask = newTask.trim();

    if (newTask.length < 3) {
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

        <Form
          handleSubmit={this.handleSubmit}
          handleChanges={this.handleChanges}
          newTask={newTask}
        />

        <Tasks
          tasks={tasks}
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}
        />

      </div>
    );
  }
}

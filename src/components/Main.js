import React, { Component } from "react";
import './Main.css';

export default class Main extends Component {
  state = {
    newTask: ''
  };

  handleChanges = (event) => {
    this.setState({
      newTask: event.target.value,
    })
  }

  render() {
    // const { newTask } = this.state;

    return (
      <div className="main">
        <h1>Task list</h1>

        <form action="#">
          <input onChange={this.handleChanges} type="text" />
          <button type="submit">Send</button>
        </form>
      </div>
    );
  }
}

import React, { Component } from "react";
import "./app.css";
import Habits from "./components/Habits";
import Nav from "./components/Nav";

class App extends Component {
  state = {
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Running", count: 0 },
      { id: 3, name: "Coding", count: 0 },
    ],
  };

  handleAddHabit = (name) => {
    name = name.charAt(0).toUpperCase() + name.slice(1)
    const habits = [
      ...this.state.habits,
      { id: Date.now(), name, count: 0 },
    ];
    this.setState({ habits });
  }

  handleIncrement = (id) => {
    const habits = this.state.habits.map((item) =>
      item.id === id ? { ...item, count: item.count + 1 } : item
    );
    this.setState({ habits });
  };

  handleDecrement = (habit) => {
    const habits = this.state.habits.map((item) =>
      item.id === habit.id
        ? { ...item, count: item.count <= 0 ? 0 : item.count - 1 }
        : item
    );
    this.setState({ habits });
  };

  handleDelete = (habit) => {
    const habits = this.state.habits.filter((item) => item.id !== habit.id);
    this.setState({ habits });
  };

  handleReset = () => {
    const habits = this.state.habits.map(item => item.count !== 0 ? {...item, count:0} : item)
    this.setState({ habits })
  }

  render() {
    return (
      <>
        <Nav totalCount={this.state.habits.filter(item => item.count > 0).length}/>
        <Habits
          habits={this.state.habits}
          handleIncrement={this.handleIncrement}
          handleDecrement={this.handleDecrement}
          handleDelete={this.handleDelete}
          handleAddHabit={this.handleAddHabit}
          handleReset={this.handleReset}
        />
      </>
    );
  }
}

export default App;

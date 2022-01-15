import React, { Component } from "react";
import "./app.css";
import Habits from "../components/habits/Habits";
import Nav from "../components/nav/Nav";

class App extends Component {
  presenter = this.props.presenter
  state = {
    habits : this.presenter.getHabits()
  }
  

  updateState = (habits) => {
    this.setState({habits})
  }

  handleAddHabit = (name) => {
    this.presenter.add(name, this.updateState)
  }

  handleIncrement = (id) => {
    this.presenter.increment(id, this.updateState)
  };

  handleDecrement = (habit) => {
    this.presenter.decrement(habit, this.updateState)
  };

  handleDelete = (habit) => {
    this.presenter.delete(habit, this.updateState)
  };

  handleReset = () => {
    this.presenter.reset(this.updateState)
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

import React, { Component } from "react";
import Habit from "../habit/Habit";
import HabitAddForm from "../form/HabitAddForm";

class Habits extends Component {
  
  render() {
    return (
      <div className="habits">
        <HabitAddForm onAdd={this.props.handleAddHabit}/>
        <ul>
          {this.props.habits.map((habit) => (
            <Habit
              key={habit.id}
              habit={habit}
              onIncrement={this.props.handleIncrement}
              onDecrement={this.props.handleDecrement}
              onDelete ={this.props.handleDelete}
            />
          ))}
        </ul>
        <button className="reset-button" onClick={this.props.handleReset}>Reset All</button>
      </div>
    );
  }
}

export default Habits;

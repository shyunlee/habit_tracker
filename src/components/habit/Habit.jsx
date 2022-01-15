import React, { PureComponent } from "react";

class Habit extends PureComponent {

  render() {
    const {name, count} = this.props.habit
    return (
      <li className="habit">
        <span className="habit-title" data-testid='habit-name'>{name}</span>
        <span className="habit-count" data-testid='habit-count'>{count}</span>
        <button className="habit-button habit-increase" title='increase' onClick={() => this.props.onIncrement(this.props.habit.id)}>
          <i className="fas fa-plus-square"></i>
        </button>
        <button className="habit-button habit-decrease" title="decrease" onClick={() => this.props.onDecrement(this.props.habit)}>
          <i className="fas fa-minus-square"></i>
        </button>
        <button className="habit-button habit-delete" title="delete" onClick={() => this.props.onDelete(this.props.habit)}>
          <i className="fas fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Habit;

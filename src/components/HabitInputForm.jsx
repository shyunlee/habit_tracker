import React, { PureComponent } from 'react';

class HabitInputForm extends PureComponent {
  formRef = React.createRef()
  inputRef = React.createRef()

  onSubmit = (event) => {
    event.preventDefault()
    const name = this.inputRef.current.value
    name && this.props.onAdd(name)
    this.formRef.current.reset()
  }

  render() {
    return (
      <form ref={this.formRef} className="habit-input" onSubmit={this.onSubmit}>
        <input ref={this.inputRef} type="text" className="add-input" placeholder="habit"/>
        <button className="add-button">Add</button>
      </form>
    );
  }
}

export default HabitInputForm;
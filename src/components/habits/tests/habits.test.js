import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import renderer from 'react-test-renderer';
import Habits from '../habits';

describe('Habits component', () => {
  const habits = [
    { name: 'Reading', count: 4, id: 1 },
    { name: 'Eating', count: 0, id: 2 },
  ];
  let HabitsComponent;
  let handleIncrement;
  let handleDecrement;
  let handleDelete;
  let handleAddHabit;
  let handleReset;

  beforeEach(() => {
    handleIncrement = jest.fn();
    handleDecrement = jest.fn();
    handleDelete = jest.fn();
    handleAddHabit = jest.fn();
    handleReset = jest.fn();
    HabitsComponent = (
      <Habits
        habits={habits}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
        handleDelete={handleDelete}
        handleAddHabit={handleAddHabit}
        handleReset={handleReset}
      />
    );
  });

  it('renders', () => {
    const component = renderer.create(HabitsComponent);
    expect(component.toJSON()).toMatchSnapshot();
  });

  describe('Button Click', () => {
    beforeEach(() => {
      render(HabitsComponent);
    });

    it('calls handleAddHabit when clicking the "Add" button', () => {
      const input = screen.getByPlaceholderText('Habit');
      const button = screen.getByText('Add');
      const newHabit = 'New Habit';
      userEvent.type(input, newHabit);
      userEvent.click(button);
      expect(handleAddHabit).toHaveBeenCalledWith(newHabit);
    });

    it('calls handleIncrement when clicking the "increase" button', () => {
      const button = screen.getAllByTitle('increase')[0];
      userEvent.click(button);
      expect(handleIncrement).toHaveBeenCalledWith(habits[0].id);
    });

    it('calls handleDecrement when clicking the "decrease" button', () => {
      const button = screen.getAllByTitle('decrease')[0];
      userEvent.click(button);
      expect(handleDecrement).toHaveBeenCalledWith(habits[0]);
    });

    it('calls handleDelete  when clicking the "delete" button', () => {
      const button = screen.getAllByTitle('delete')[0];
      userEvent.click(button);
      expect(handleDelete).toHaveBeenCalledWith(habits[0]);
    });

    it('calls handleReset when clicking the "Reset All" button', () => {
      const button = screen.getByText('Reset All');
      userEvent.click(button);
      expect(handleReset).toHaveBeenCalledTimes(1);
    });
  });
});

import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderer from "react-test-renderer";
import HabitAddForm from "../HabitAddForm";

describe("HabitAddForm", () => {
  it("Render Snapshot Test", () => {
    const component = renderer.create(<HabitAddForm onAdd={jest.fn()} />)
    expect(component.toJSON).toMatchSnapshot()
  })

  describe("Form Submit Test", () => {
    let onAdd;
    let input;
    let button;

    beforeEach(() => {
      onAdd = jest.fn();
      render(<HabitAddForm onAdd={onAdd} />);
      input = screen.getByPlaceholderText("Habit");
      button = screen.getByText("Add");
    });

    it("calls add function from props when name is input and valid", () => {
      userEvent.type(input, "New Habit");
      userEvent.click(button);

      expect(onAdd).toHaveBeenCalledWith("New Habit");
    });

    it("shold not call add function from props when name is empty", () => {
      userEvent.type(input, "");
      userEvent.click(button);

      expect(onAdd).toHaveBeenCalledTimes(0);
    });
  });
});

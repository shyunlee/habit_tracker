export default class HabitPresenter {
  constructor(habits) {
    this.habits = habits;
  }

  getHabits = () => {
    return this.habits;
  };

  add = (name, update) => {
    name = name.charAt(0).toUpperCase() + name.slice(1);
    this.habits = [...this.habits, { id: Date.now(), name, count: 0 }];
    update(this.habits);
  };

  increment = (id, update) => {
    this.habits = this.habits.map((item) =>
      item.id === id ? { ...item, count: item.count + 1 } : item
    );

    update(this.habits);
  };

  decrement = (habit, update) => {
    this.habits = this.habits.map((item) =>
      item.id === habit.id
        ? { ...item, count: item.count <= 0 ? 0 : item.count - 1 }
        : item
    );

    update(this.habits)
  };

  delete = (habit, update) => {
    this.habits = this.habits.filter((item) => item.id !== habit.id);
    update(this.habits)
  }

  reset = (update) => {
    this.habits = this.habits.map(item => item.count !== 0 ? {...item, count:0} : item)
    update(this.habits)
  }
}

import HabitPresenter from "../habit_presenter";

describe("HabitPresenter", () => {
  let habits = [
    { id: 1, name: "Reading", count: 1 },
    { id: 2, name: "Coding", count: 0 },
  ];
  let presenter;
  let update;

  beforeEach(() => {
    presenter = new HabitPresenter(habits);
    update = jest.fn()
  });

  it("inits with habits", () => {
    expect(presenter.getHabits()).toEqual(habits);
  });

  it("increments habit count and call update callback function", () => {
    presenter.increment(habits[0].id, update);

    expect(presenter.getHabits()[0].count).toBe(2)
    checkUpdateIsCalled()
  });

  it('decrements habit count and call update callback function', () => {
    presenter.decrement(habits[0], update)

    expect(presenter.getHabits()[0].count).toBe(0)
    checkUpdateIsCalled()
  })

  it('should not set the count below 0 when decrement is made', () => {
    presenter.decrement(habits[0], update)
    presenter.decrement(habits[0], update)

    expect(presenter.getHabits()[0].count).toBe(0)
    checkUpdateIsCalled()
  })

  it('delete habit from the list and call update callback function', () => {
    presenter.delete(habits[0], update)

    expect(presenter.getHabits().length).toBe(1)
    expect(presenter.getHabits()[0].name).toBe('Coding')
    checkUpdateIsCalled()
  })

  it('add new habit to list and call update callback function', () => {
    presenter.add('Running', update)

    expect(presenter.getHabits().length).toBe(3)
    expect(presenter.getHabits()[2].name).toBe('Running')
    checkUpdateIsCalled()
  })

  it('reset count of all habits to 0 and call update callback function', () => {
    presenter.reset(update)

    expect(presenter.getHabits()[0].count).toBe(0)
    expect(presenter.getHabits()[1].count).toBe(0)
    checkUpdateIsCalled()
  })



  function checkUpdateIsCalled() {
    expect(update).toHaveBeenCalled()
    expect(update).toHaveBeenCalledWith(presenter.getHabits())
  }
});

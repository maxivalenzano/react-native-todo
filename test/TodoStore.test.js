import reducer from "../src/context/reducer";

test("add todo", async () => {
  const a = {
    deadline: "2021-07-23",
    end: "2021-07-23",
    id: 1,
    isCompleted: false,
    remind: "5 minutes",
    repeat: "Weekly",
    start: "2021-07-23",
  };
  const b = {
    deadline: "2021-07-23",
    end: "2021-07-23",
    isCompleted: false,
    remind: "5 minutes",
    repeat: "Weekly",
    start: "2021-07-23",
  };
  const b2 = {
    deadline: "2021-07-23",
    end: "2021-07-23",
    id: 2,
    isCompleted: false,
    remind: "5 minutes",
    repeat: "Weekly",
    start: "2021-07-23",
  };
  const state = { todos: [a], id: 2 };
  const newState = reducer(state, { type: "ADD", payload: b });

  expect(newState.todos).toEqual([a, b2]);
});

test("completes todo", async () => {
  const a = {
    deadline: "2021-07-23",
    end: "2021-07-23",
    id: 1,
    isCompleted: false,
    remind: "5 minutes",
    repeat: "Weekly",
    start: "2021-07-23",
  };
  const b = {
    deadline: "2021-07-23",
    end: "2021-07-23",
    isCompleted: false,
    id: 2,
    remind: "5 minutes",
    repeat: "Weekly",
    start: "2021-07-23",
  };
  const state = { todos: [a, b] };
  const newState = reducer(state, { type: "DELETE", payload: b });

  expect(newState.todos).toEqual([a]);
});

test("check todo", async () => {
  const a = {
    deadline: "2021-07-23",
    end: "2021-07-23",
    id: 1,
    isCompleted: false,
    remind: "5 minutes",
    repeat: "Weekly",
    start: "2021-07-23",
  };
  const a2 = {
    deadline: "2021-07-23",
    end: "2021-07-23",
    id: 1,
    isCompleted: true,
    remind: "5 minutes",
    repeat: "Weekly",
    start: "2021-07-23",
  };
  const state = { todos: [a] };
  const newState = reducer(state, {
    type: "CHECK",
    payload: { item: a, isCompleted: true },
  });

  expect(newState.todos).toEqual([a2]);
});

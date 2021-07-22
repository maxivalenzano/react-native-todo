import AsyncStorage from "@react-native-async-storage/async-storage";

export default function reducer(state, action) {
  switch (action.type) {
    case "INIT_REDUCER":
      return { ...action.payload };
    case "ADD":
      if (!action.payload) {
        return state;
      }
      const newId = !!state.todos ? state.todos.length + 1 : 1;
      const newTodo = { ...action.payload, id: newId };
      return {
        ...state,
        todos: [...state.todos, newTodo],
      };
    case "CHECK":
      const { item, isCompleted } = action.payload;
      const index = state.todos.indexOf(item);
      const newItem = { ...item, isCompleted: isCompleted };
      state.todos[index] = newItem;
      return {
        ...state,
        todos: [...state.todos],
      };
    case "DELETE":
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== action.payload.id),
      };
    default:
      return state;
  }
}

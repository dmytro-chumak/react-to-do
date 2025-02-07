export default function tasksReducer(tasks, action) {
  switch (action.type) {
    case "done":
      return tasks.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    default:
      return state;
  }
}

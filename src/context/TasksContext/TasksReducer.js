export default function tasksReducer(tasks, action) {
  switch (action.type) {
    case "done":
      return tasks.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case "add":
      const maxId = Math.max(...tasks.map((todo) => todo.id), 0);

      const task = {
        id: maxId + 1,
        text: action.text,
        date: action.date,
        done: false,
      };

      return [...tasks, task];
    default:
      return state;
  }
}

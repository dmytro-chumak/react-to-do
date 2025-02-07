"use client";

import { useReducer } from "react";

import {
  TasksContext,
  TasksDispatchContext,
} from "@/context/TasksContext/TasksContext";

import tasksReducer from "@/context/TasksContext/TasksReducer";

export default function TasksContextProvider({ children }) {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTodos);

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}

const initialTodos = [
  {
    id: 1,
    text: "Learn React",
    done: true,
  },
  {
    id: 2,
    text: "Learn Next.js",
    done: false,
  },
];

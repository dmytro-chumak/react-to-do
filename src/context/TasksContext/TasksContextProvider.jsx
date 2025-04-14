"use client";

import { useReducer, useContext } from "react";

import {
  TasksContext,
  TasksDispatchContext,
} from "@/context/TasksContext/TasksContext";

import { SearchContext } from "@/context/SearchContext/SearchContext";

import tasksReducer from "@/context/TasksContext/TasksReducer";

export default function TasksContextProvider({ children }) {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTodos);

  const search = useContext(SearchContext).toLowerCase();

  const filteredTasks = search
    ? tasks.filter((todo) => todo.text.toLowerCase().includes(search))
    : tasks;

  return (
    <TasksContext.Provider value={filteredTasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}

const initialTodos = [
  {
    id: 1,
    text: "Done task",
    done: true,
  },
  {
    id: 2,
    text: "Unfinished task",
    done: false,
  },
  {
    id: 3,
    text: "Today's task",
    done: false,
    date: new Date().toLocaleDateString(),
  },
  {
    id: 4,
    text: "Planned task",
    done: false,
    date: "31.02.2025",
  },
  {
    id: 5,
    text: "Important task",
    done: false,
    important: true,
  },
];

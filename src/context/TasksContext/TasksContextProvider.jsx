"use client";

import { TasksContext } from "@/context/TasksContext/TasksContext";

export default function TasksContextProvider({ children }) {
  return <TasksContext.Provider value={1}>{children}</TasksContext.Provider>;
}

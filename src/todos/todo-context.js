import React, { createContext } from "react";
import { useLocalStore } from "mobx-react-lite";
import { getTodos } from "./todo-service";

export const TodoProvider = ({ children }) => {
  const store = useLocalStore(() => ({
    /*observables*/
    todos: [],
    todo: {
      id: "",
      title: ""
    },
    isLoading: false,
    error: "",

    /* actions */
    async getTodos() {
      store.isLoading = true;
      try {
        const {data} = await getTodos();
        store.todos = data;
      } catch (e) {
          alert(e.message);
      }
      store.isLoading = false;
    }
  }));

  return <todoContext.Provider value={store}>{children}</todoContext.Provider>
};

export const todoContext = createContext();
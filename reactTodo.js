import React, { useReducer, useContext, createContext } from "react";

const TodoContext = createContext();

const initialState = {
  todos: [],
};

function todoReducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "REMOVE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo, index) => index !== action.payload),
      };
    default:
      return state;
  }
}

export const useTodos = () => {
  return useContext(TodoContext);
};

function AppProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
}

function TodoInput() {
  const [input, setInput] = React.useState("");
  const { dispatch } = useTodos();

  const handleAddTodo = () => {
    if (input.trim()) {
      dispatch({ type: "ADD_TODO", payload: input });
      setInput("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a todo"
      />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
}

function TodoList() {
  const { state, dispatch } = useTodos();

  return (
    <ul>
      {state.todos.map((todo, index) => (
        <li key={index}>
          {todo}{" "}
          <button onClick={() => dispatch({ type: "REMOVE_TODO", payload: index })}>
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
}

function App() {
  return (
    <AppProvider>
      <h1>Todo List</h1>
      <TodoInput />
      <TodoList />
    </AppProvider>
  );
}

export default App;

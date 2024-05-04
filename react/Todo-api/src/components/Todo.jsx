import React, { useState, useReducer } from 'react';

const reducer = (state, action) => {
  switch(action.type) {
    case "ADD":
      return [...state, { ...action.data, id: Math.random(), complete: false }];
    case "DELETE":
      return state.filter(todo => todo.id !== action.id);
    case "EDIT":
      return state.map(todo =>
        todo.id === action.id ? { ...todo, ...action.data } : todo
      );
    default:
      return state;
  }
};

const Todo = () => {
  const [input, setInput] = useState({ id: "", title: "" });
  const [state, dispatch] = useReducer(reducer, []);

  const handleAdd = () => {
    if (input.title.trim() !== "") {
      dispatch({ type: "ADD", data: input });
      setInput({ id: "", title: "" });
    }
  };

  const handleDelete = (id) => {
    dispatch({ type: "DELETE", id });
  };

  const handleEdit = (id) => {
    const todoToEdit = state.find(todo => todo.id === id);
    if (todoToEdit) {
      setInput({ id: todoToEdit.id, title: todoToEdit.title });
    }
  };

  return (
    <div>
      <h1>{JSON.stringify(state)}</h1>
      <input
        type="text"
        value={input.id}
        placeholder="ID"
        onChange={(e) => setInput({ ...input, id: e.target.value })}
      />
      <input
        type="text"
        value={input.title}
        placeholder="Title"
        onChange={(e) => setInput({ ...input, title: e.target.value })}
      />
      <button onClick={handleAdd}>ADD</button>
      <button onClick={() => handleDelete(input.id)}>DELETE</button>
      <button onClick={() => dispatch({ type: "EDIT", id: input.id, data: input })}>EDIT</button>
      <ul>
        {state.map(todo => (
          <li key={todo.id}>
            {todo.title} - {todo.complete ? 'Completed' : 'Incomplete'}
            <button onClick={() => handleEdit(todo.id)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;

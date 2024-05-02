import React, { useState, useReducer } from 'react';

const reducer = (state, action) => {
  switch(action.type) {
    case "ADD":
      return [...state, { id: state.length + 1, ...action.data, complete: false }];
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
  const [input, setInput] = useState({ id: '', title: '' });
  const [state, dispatch] = useReducer(reducer, []);

  const handleChange = e => {
    const { name, value } = e.target;
    setInput(prevInput => ({ ...prevInput, [name]: value }));
  };

  const handleAdd = () => {
    if (!input.title.trim()) return;
    dispatch({ type: "ADD", data: input });
    setInput({ id: '', title: '' });
  };

  const handleDelete = id => {
    dispatch({ type: "DELETE", id });
  };

  const handleEdit = () => {
    if (!input.title.trim() || !input.id) return;
    dispatch({ type: "EDIT", id: input.id, data: input });
    setInput({ id: '', title: '' });
  };

  return (
    <div>
      <h1>{JSON.stringify(state)}</h1>
      <input type="text" name="id" value={input.id} onChange={handleChange} placeholder="ID" />
      <input type="text" name="title" value={input.title} onChange={handleChange} placeholder="Title" />
      <button onClick={handleAdd}>ADD</button>
      <button onClick={() => handleDelete(input.id)}>DELETE</button>
      <button onClick={handleEdit}>EDIT</button>
    </div>
  );
};

export default Todo;

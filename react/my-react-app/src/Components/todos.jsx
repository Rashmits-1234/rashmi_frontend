import React, { useState, useReducer } from 'react';

const reducer = (state, action) => {
  switch(action.type) {
    case "ADD":
      return [...state, { ...action.data, complete: false }];
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
  const [input, setInput] = useState({});
  const [state, dispatch] = useReducer(reducer, [])

  return (
    <div>
      <h1>{JSON.stringify(state)}</h1>
      <input type="text" onChange={(e) => setInput({ ...input, id: e.target.value })} />
      <input type="text" onChange={(e) => setInput({ ...input, title: e.target.value })} />
      <button onClick={() => dispatch({ type: "ADD", data: input })}>ADD</button>
      <button onClick={() => dispatch({ type: "DELETE", id: input.id })}>DELETE</button>
      <button onClick={() => dispatch({ type: "EDIT", id: input.id, data: input })}>EDIT</button>
    </div>
  );
};

export default Todo;
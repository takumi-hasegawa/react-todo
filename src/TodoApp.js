import React, { useState } from "react";
import AddTodo from "./AddTodo";
import TodoElement from "./TodoElement";

const TodoApp = () => {
  const [value, setValue] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleDelete = (id) => {
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
  };

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
  };

  const add = () => {
    const newTodo = { id: todoList.length, content: value };
    const newTodoList = [...todoList, newTodo];
    setTodoList(newTodoList);
    setValue("");
  };

  return (
    <div>
      <h1>TODO App</h1>
      <div>
        <AddTodo value={value} onChange={handleChange} add={add} />
        <ul>
          {todoList.map((todo) => (
            <TodoElement 
              key={todo.id} 
              content={todo.content} 
              onDelete={() => handleDelete(todo.id)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoApp;

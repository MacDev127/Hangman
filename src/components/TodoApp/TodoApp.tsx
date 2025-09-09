import React, { useState } from 'react';
import TodoItem from './TodoItem';

// take value from user: input
// store value: state
//use value: submit fucntionality, send to our list
//delete todo, complete todo

interface TodoProps {
  text: string;
  id: number;
  completed: boolean;
}

const TodoApp = () => {
  const [todo, setTodo] = useState<string>('');
  const [todoItem, setTodoItem] = useState<TodoProps[]>([]);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setTodo('');
    setTodoItem((prev) => [...prev, newTodo]);
  };

  const newTodo = {
    text: todo,
    id: Date.now(),
    completed: false,
  };

  const handleDelete = (id: number) => {
    setTodoItem((prev) => prev.filter((deleteItem) => deleteItem.id !== id));
  };

  const handleComplete = (id: number) => {
    setTodoItem((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  return (
    <div className="Todo">
      <h2>Todo App</h2>
      <input
        type="text"
        placeholder="Enter todo"
        onChange={handleInput}
        value={todo}
      />
      <button onClick={handleSubmit}>Add Todo</button>

      {todoItem.map((item) => (
        <TodoItem
          text={item.text}
          id={item.id}
          key={item.id}
          completed={item.completed}
          onDelete={handleDelete}
          onComplete={handleComplete}
        />
      ))}
    </div>
  );
};

export default TodoApp;

import React, { useState } from 'react';
import TodoList from './TodoItem';

interface TodoProps {
  text: string;
  id: number;
  completed: boolean;
}

const Todo = () => {
  const [todo, setTodo] = useState<string>('');
  const [todoList, setTodoList] = useState<TodoProps[]>([]);
  const [showCompleted, setShowCompleted] = useState<boolean>(false);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!todo.trim()) return;

    const newTodo = {
      id: Date.now(),
      text: todo,
      completed: false,
    };

    setTodoList((prev) => [...prev, newTodo]);

    setTodo('');
  };

  const handleDelete = (id: number) => {
    setTodoList((prev) => prev.filter((deleteItem) => deleteItem.id != id));
  };

  const handleComplete = (id: number) => {
    setTodoList((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const filteredTodos = showCompleted
    ? todoList.filter((item) => item.completed)
    : todoList;

  return (
    <div className="todo">
      <input
        type="text"
        placeholder="Enter todo.."
        onChange={handleInput}
        value={todo}
      />
      <button onClick={handleSubmit}>Add Todo</button>
      <button onClick={() => setShowCompleted((prev) => !prev)}>
        {showCompleted ? 'Show All' : 'Show Completed'}
      </button>

      <div className="todo-list">
        {filteredTodos.map((item) => (
          <TodoList
            todoText={item.text}
            id={item.id}
            key={item.id}
            todoComplete={item.completed}
            onDelete={handleDelete}
            onComplete={handleComplete}
          />
        ))}
      </div>
    </div>
  );
};

export default Todo;

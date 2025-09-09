import React, { useState } from 'react';
import TodoList from './TodoList';

interface TodoListProps {
  id: number;
  text: string;
}

const Practice = () => {
  const [todo, setTodo] = useState<string>('');
  const [todoList, setTodoList] = useState<TodoListProps[]>([]);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const handleSubmit = () => {
    const newTodo = {
      id: Date.now(),
      text: todo,
    };

    setTodoList((prev) => [...prev, newTodo]);
    setTodo('');
  };

  const handleDelete = (id: number) => {
    setTodoList((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="todo">
      <h1>Todo</h1>

      <div>
        <input
          type="text"
          placeholder="enter todo"
          onChange={handleInput}
          value={todo}
        />
        <button onClick={handleSubmit}>Add Todo</button>
      </div>

      <div>
        {todoList.map((item) => (
          <>
            <TodoList
              key={item.id}
              id={item.id}
              text={item.text}
              onDelete={handleDelete}
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default Practice;

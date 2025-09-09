import React, { useState } from 'react';

interface UserProps {
  text: string;
  id: number;
}

const TodoBasic = () => {
  const [todo, setTodo] = useState<string>('');
  const [todoList, setTodoList] = useState<UserProps[]>([]);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const newTodo = {
    text: todo,
    id: Date.now(),
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setTodoList((prev) => [...prev, newTodo]);
    setTodo('');
  };

  const handleDelete = (id: number) => {
    setTodoList((prev) => prev.filter((deleteItem) => deleteItem.id !== id));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter todo"
        onChange={handleInput}
        value={todo}
      />
      <button onClick={handleSubmit}>Submit</button>

      <div>
        {todoList.map((item) => (
          <div key={item.id}>
            <h2>{item.text}</h2>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoBasic;

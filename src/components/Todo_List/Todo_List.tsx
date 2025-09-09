import './todo-styles.css';
import { useState } from 'react';

const Todo_List = () => {
  const [todo, setTodo] = useState<string>('');
  const [todolist, setTodoList] = useState<string[]>(['']);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setTodoList((prev) => [...prev, todo]);
    setTodo('');
  };

  return (
    <div className="container">
      <h1>Todo App</h1>

      <input
        type="text"
        placeholder="Enter Todo..."
        onChange={handleInputChange}
      />
      <button onClick={handleSubmit}>Add Todo</button>

      <div>
        <h2>Your Todos:</h2>
        {todolist.length > 0 ? (
          <div>
            {todolist.map((list, index) => (
              <h3 key={index}>{list}</h3>
            ))}
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default Todo_List;

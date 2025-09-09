interface TodoListProps {
  id: number;
  text: string;
  onDelete: (id: number) => void;
}

const TodoList = ({ id, text, onDelete }: TodoListProps) => {
  return (
    <div className="todoList">
      <div className="todoItem">
        <h4>{text}</h4>
        <button onClick={() => onDelete(id)}>Delete</button>
      </div>
    </div>
  );
};

export default TodoList;

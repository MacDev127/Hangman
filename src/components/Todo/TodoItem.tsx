interface TodoItemProps {
  todoText: string;
  id: number;
  todoComplete: boolean;
  onComplete: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoItem = ({
  todoText,
  id,
  todoComplete,
  onComplete,
  onDelete,
}: TodoItemProps) => {
  return (
    <div className="todoList">
      <h3 style={{ textDecoration: todoComplete ? 'line-through' : '' }}>
        {todoText}
      </h3>

      <button onClick={() => onDelete(id)}>Delete</button>
      <button onClick={() => onComplete(id)}>Complete</button>
    </div>
  );
};

export default TodoItem;

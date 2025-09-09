interface TodoItemProps {
  text: string;
  id: number;
  completed: boolean;
  onDelete: (id: number) => void;
  onComplete: (id: number) => void;
}

const TodoItem = ({
  text,
  id,
  onDelete,
  onComplete,
  completed,
}: TodoItemProps) => {
  return (
    <div>
      <h3 style={{ textDecoration: completed ? 'line-through' : '' }}>
        {text}
      </h3>
      <button onClick={() => onDelete(id)}>Delete</button>
      <button onClick={() => onComplete(id)}>Complete</button>
    </div>
  );
};

export default TodoItem;

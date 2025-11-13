import TodoItem from "./TodoItem";

interface Todo {
  _id: string;
  title: string;
  done: boolean;
}

interface TodoListProps {
  todos: Todo[];
  onDelete: (id: string) => void;
  onToggle: (id: string) => void;
}

export default function TodoList({ todos, onDelete, onToggle }: TodoListProps) {
  if (todos.length === 0) return <p className="text-center text-gray-500">Aucune tâche pour le moment.</p>;

  return (
    <div className="flex flex-col gap-3">
      {todos.map((todo) => (
        <TodoItem key={todo._id} todo={todo} onDelete={onDelete} onToggle={onToggle} />
      ))}
    </div>
  );
}

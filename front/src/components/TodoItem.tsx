interface Todo {
  _id: string;
  title: string;
  done: boolean;
}

interface TodoItemProps {
  todo: Todo;
  onDelete: (id: string) => void;
  onToggle: (id: string) => void;
}

export default function TodoItem({ todo, onDelete, onToggle }: TodoItemProps) {
  return (
    <div className="bg-gray-100 rounded-lg p-4 flex justify-between items-center">
      <div className="flex flex-col">
        <h3 className={`text-lg font-semibold ${todo.done ? "line-through text-gray-500" : ""}`}>
          {todo.title}
        </h3>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => onToggle(todo._id)}
          className="text-sm bg-green-500 text-white px-3 py-1 rounded"
        >
          {todo.done ? "Annuler" : "Valider"}
        </button>
        <button
          onClick={() => onDelete(todo._id)}
          className="text-sm bg-red-500 text-white px-3 py-1 rounded"
        >
          Supprimer
        </button>
      </div>
    </div>
  );
}

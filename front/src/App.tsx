import { useEffect, useState } from 'react'
import { getTodos, createTodo, updateTodo, deleteTodo } from "./services/api";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

import './App.css'

function App() {

  interface Todo {
  _id: string;
  title: string;
  done: boolean;
}

  
  const [loading, setLoading] = useState(true);
  const [todos, setTodos] = useState<Todo[]>([]);

  const loadTodos = async () => {
    const res = await getTodos();
    setTodos(res.data);
    setLoading(false)
  };

  useEffect(() => {
    loadTodos();
  }, []);

  const handleAdd = async (title: string) => {
    await createTodo({ title });
    loadTodos();
  };

  const handleDelete = async (id: string) => {
    await deleteTodo(id);
    loadTodos();
  };

  const handleToggle = async (id: string) => {
    const todo = todos.find((t) => t._id === id);
    if (!todo) return;
    await updateTodo(id, { done: !todo.done });
    loadTodos();
  };

  if (loading) return <p>Loading…</p>;
  return (
  
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center">Mes Todos</h1>
      <TodoForm onAdd={handleAdd} />
      <TodoList todos={todos} onDelete={handleDelete} onToggle={handleToggle} />
    </div>

    
  )
}
export default App;
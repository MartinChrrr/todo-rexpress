import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [todo, setTodo] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
      fetch("http://localhost:3000/api/") 
      .then(res => res.json())
      .then(data => {
        setTodo(data);
        setLoading(false);
      });

  },[])
  if (loading) return <p>Loading…</p>;
  return (
  
      <div>
        <h1 className='bg-amber-600'>Todo</h1>
      
          <ul>
      {todo.map(b => (
        <li key={b.id}>{b.title}</li>
      ))}
    </ul>
      </div>

    
  )
}

export default App

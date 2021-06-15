
import { Button, FormControl,InputLabel,Input } from '@material-ui/core';
import { useState } from 'react';
import './App.css';
import Todo from './Todo';

function App() {
  const [todos, setTodos] = useState([]);

  const [input, setInput] = useState('');
  console.log(todos)

  // when app loads we will try to fetch all todos from firebase/database and repeat the same process if any updates are found

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, input]);
    setInput("")
  }
  return (
    <div className="App">
      <h1>hello world 🔥🔥🔥🔥</h1>
      <form >
        <FormControl>
          <InputLabel>Add your Todo</InputLabel>
          <Input value={input} onChange={e => setInput(e.target.value)}/>
        </FormControl>
        <Button variant="contained" color="primary" onClick={addTodo} type="submit" disabled={!input}>
          Add Todo
        </Button>

      </form>

      <ul>
        {todos.map(todo => (
          <Todo text={todo} />
          // <li>{todo}</li>
        ))}
      </ul>

    </div>
  );
}

export default App;


import { Button, FormControl,InputLabel,Input } from '@material-ui/core';
import { useEffect, useState } from 'react';
import './App.css';
import Todo from './Todo';
import db from './firebase'
import firebase from 'firebase'

function App() {
  const [todos, setTodos] = useState([]);

  const [input, setInput] = useState('');
  console.log(todos)

  // when app loads we will try to fetch all todos from firebase/database and repeat the same process if any updates are found

  useEffect(() => {
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc=> ({id:doc.id,todo : doc.data().todo})));
    })
    
  }, []);

  const addTodo = (e) => {
    e.preventDefault();
    db.collection('todos').add({
      todo:input,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })
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
        {todos.map((todo,id) => (
          <Todo key={id}todo={todo} />
          // <li>{todo}</li>
        ))}
      </ul>

    </div>
  );
}

export default App;

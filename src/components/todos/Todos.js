import { useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

const Todos = ({}) => {

  const [todos, setTodos] = useState([
    { id: 1, title: 'Learn Ruby', complete: true },
    { id: 2, title: 'Learn Rails', complete: false },
    { id: 3, title: 'Learn React', complete: false },
  ])

  // with this project we need to simulate a db

  // usually we need a use effect and axios to grab and store
  // in our state

  // b/c we don't have a db, we need to create a uniq id ourself
  const getUniqId = () => {
    //NOTE We are just using this as a helper function for id's since we aren't using a db yet
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }


  const addTodo = (todo) => {
    // b/c no db we need to create a id 
    const newTodo = { id: getUniqId(), ...todo }

    // create a new arr, with all of the todos that are
    // already there with ...todos, 
    // add the new todo 
    setTodos([...todos, newTodo])

    // later need to do the same but to the db
  }

  return (
    <>
      <TodoForm addTodo={addTodo} />
      <h1>Todos</h1>
      <TodoList 
        todos={todos}
      />
    </>
  )
}

export default Todos;
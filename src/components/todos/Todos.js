import { useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import Footer from '../shared/Footer';

const Todos = ({}) => {

  const [todos, setTodos] = useState([
    { id: 1, title: 'Learn Ruby', complete: true },
    { id: 2, title: 'Learn Rails', complete: false },
    { id: 3, title: 'Learn React', complete: false },
    // {id: 2342adfa, title: 'milk', complete: false}
  ])

  const [filter, setFilter] = useState('All')

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

  // todo = { title: 'milk', complete: false}
  const addTodo = (todo) => {
    // b/c no db we need to create a id 
    const newTodo = { id: getUniqId(), ...todo }
    // {id: 2342adfa, title: 'milk', complete: false}
    // create a new arr, with all of the todos that are
    // already there with ...todos, 
    // add the new todo 
    setTodos([...todos, newTodo])

    // later need to do the same but to the db
  }

  const updateTodo = (id, todo) => {
    const newUpdatedTodos = todos.map( t => {
      if (t.id === id) {
        return todo // if we find the id that we are updating,
        // then return the new updated todo
      }
      return t // else continue looking
    })
    // save the new updated todo into our state
    setTodos(newUpdatedTodos)
  }

  const deleteTodo = (id) => {
    // deleting, filter out the one we are deleting
    // filtering in everything but the one deleting
    setTodos( todos.filter( t => t.id !== id ))
  }

  const filteredItems = () => {
    switch(filter) {
      case 'Active':
        return todos.filter( t => !t.complete)
      case 'Completed':
        return todos.filter( t => t.complete)
      default:
        return todos
    }
  }

  return (
    <>
      <TodoForm addTodo={addTodo} />
      <h1>Todos</h1>
      <Footer 
        filter={filter}
        setFilter={setFilter}
      />
      <TodoList 
        // todos={todos}
        todos={filteredItems()}
        deleteTodo={deleteTodo}
        updateTodo={updateTodo}
      />
    </>
  )
}

export default Todos;
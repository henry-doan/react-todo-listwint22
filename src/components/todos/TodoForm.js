import { useState, useEffect } from 'react';
                          //  -> for the update
const TodoForm = ({ addTodo, id, title, complete, updateTodo, setEdit }) => {
  // title complete, id db
  // attr of what the user can input, datatype
  // have complete be false, b/c you create that is a new todo
  const [todo, setTodo] = useState({ title: '', complete: false })

  // if it is a update then pre fill out the form
  useEffect( () => {
    if (id) {
      // setTodo({ title: title, complete: complete })
      setTodo({ title, complete })
    }
  }, [])

  const handleSubmit = (e) => {
    // when form submits e
    e.preventDefault()
    // not refresh, thus losing our data 
    // not posting to the url

    // if we are passingin id 
    if (id) {
      // call our update with id and the updated value
      updateTodo(id, todo)
      setEdit(false)
    } else {
      // call our add function
      // todo = { title: 'milk', complete: false}
      addTodo(todo)
    }

    // clear out the form by setting the state back to the initial values
    setTodo({ title: '', complete: false })
  }

  return (
    <>  
      <form onSubmit={handleSubmit}>
        <label>Todo Title</label>
        <input 
          // need a input for each field

          // these three for it to work
          name='title' // what is the field for
          value={todo.title} // where are we storing the user input value
          // how are we storing the user input to the state?
          // e events, triggers , e.target.value, grab what the user type in the box
          // store the value of what ever that was already there plus ...todo
          // the title to be what the user typed 
          onChange={(e) => setTodo({ ...todo, title: e.target.value })}

          // optional
          required // more for front end make sure they fill this out
          placeholder="title"
        />
        {/* <input 
          // these three for it to work
          name='age' // what is the field for
          value={}
          onChange

          // optional
          required
          placeholder="title"
        /> */}
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default TodoForm;
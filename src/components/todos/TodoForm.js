import { useState, useEffect } from 'react';
                          //  -> for the update
const TodoForm = ({ addTodo, id, title, complete, updateTodo, setEdit }) => {
  // title complete, id db
  // attr of what the user can input, datatype
  // have complete be false, b/c you create that is a new todo
  const [todo, setTodo] = useState({ title: '', complete: false, age: '', going: '', phone: '' })

  // if it is a update then pre fill out the form
  useEffect( () => {
    if (id) {
      // setTodo({ title: title, complete: complete })
      setTodo({ title, complete })
    }
  }, [])

  const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

  const handleSubmit = (e) => {
    // when form submits e
    e.preventDefault()

    // fetch("/", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //   body: encode({ "form-name": "todo", ...todo})
    // })
    //   .then(
    //     res => {
    //       console.log(res)
    //       debugger
    //     }
    //   )
    //   .catch(error => {
    //     alert(error)
    //     debugger
    //   } 
    //   );

    
    // not refresh, thus losing our data 
    // not posting to the url

    // if we are passingin id 
    // if (id) {
    //   // call our update with id and the updated value
    //   updateTodo(id, todo)
    //   setEdit(false)
    // } else {
    //   // call our add function
    //   // todo = { title: 'milk', complete: false}
    //   addTodo(todo)
    // }

    // clear out the form by setting the state back to the initial values
    setTodo({ title: '', complete: false, age: '', going: '', phone: '' })
  }

  

  return (
    <>  
      
      <form onSubmit={handleSubmit} name='todo' method='post'>
        <label>Todo Title</label>
        <input type="hidden" name="form-name" value="todo" />
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
          type='text'
          // optional
          required // more for front end make sure they fill this out
          placeholder="title"
        />
        <input 
          // these three for it to work
          name='age' // what is the field for
          value={todo.age}
          onChange={(e) => setTodo({ ...todo, age: e.target.value })}
          type='number'
          // optional
          required
          placeholder="title"
        />
        <select
          name='going'
          value={todo.going}
          onChange={(e) => setTodo({...todo, going: e.target.value })}
          required
        >
        <option value="Accepts">Joyfully Accepts</option>
        <option value="Declines">Respectfully Declines</option>
      </select>
      <input
          type="tel" 
          placeholder="Phone Number" 
          name='phone'
          value={todo.phone}
          onChange={(e) => setTodo({...todo, phone: e.target.value })}
          required
        />
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default TodoForm;
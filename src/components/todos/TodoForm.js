import { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  // title complete, id db
  // attr of what the user can input, datatype
  // have complete be false, b/c you create that is a new todo
  const [todo, setTodo] = useState({ title: '', complete: false })

  const handleSubmit = (e) => {
    
  }

  return (
    <>  
      <form onSubmit={handleSubmit}>
        <input 

        />
      </form>
    </>
  )
}

export default TodoForm;
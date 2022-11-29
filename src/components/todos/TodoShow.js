import { useState } from 'react';
import TodoForm from './TodoForm';

const TodoShow = ({ id, title, complete, deleteTodo, updateTodo }) => {
  const [editing, setEdit] = useState(false)

  return (
    <>
      {/* conditional rendering */}
      {
        editing ?
        <>
          <TodoForm
            id={id}
            title={title}
            complete={complete}
            updateTodo={updateTodo}
            setEdit={setEdit}
          />
          <button
            onClick={() => setEdit(false)}
          >
            Cancel
          </button>
        </>
        : 
        <>
          <h1>{title}</h1>
                            {/* condition ? true : false */}
          <p>Completed: {complete ? 'Yes' : 'No'}</p>
          <button
            // () => annoy f(x) , stop it and only do the f(x) on click
            onClick={() => deleteTodo(id) }
          >
            Delete
          </button>
          <button onClick={() => setEdit(true)}>
            Edit
          </button>
        </>
      }
    </>
  )
}

export default TodoShow;
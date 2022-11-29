import TodoShow from './TodoShow';

const TodoList = ({ todos, deleteTodo, updateTodo }) => (
  <>
    { todos.map( t => 
      <TodoShow 
        key={t.id}
        {...t}
        // id={t.id} title={t.title} complete={t.complete}
        deleteTodo={deleteTodo}
        updateTodo={updateTodo}
      />
    )}
  </>
)

export default TodoList;
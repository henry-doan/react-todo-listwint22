import TodoShow from './TodoShow';

const TodoList = ({ todos }) => (
  <>
    { todos.map( t => 
      <TodoShow 
        key={t.id}
        {...t}
        // id={t.id} title={t.title} complete={t.complete}
      />
    )}
  </>
)

export default TodoList;
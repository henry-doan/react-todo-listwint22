const TodoShow = ({ id, title, complete }) => {

  return (
    <>
      <h1>{title}</h1>
                        {/* condition ? true : false */}
      <p>Completed: {complete ? 'Yes' : 'No'}</p>
    </>
  )
}

export default TodoShow;
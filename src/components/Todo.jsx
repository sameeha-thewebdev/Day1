import React from 'react'

const Todo = ({task, toggleComplete, deleteTodo}) => {
  return (
    <div className='todoList'>
      <p onClick={()=> toggleComplete(task.id)} className={`${task.completed ? 'completed' : ""}`}>
        {task.task}
      </p>
      <button onClick={()=> deleteTodo(task.id)}>Delete</button>
    </div>
  )
}

export default Todo
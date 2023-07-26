import React, {useState} from 'react'

const TodoForm = ({addTodo}) => {
  const [value, setValue] = useState("")

  const handleSubmit = e => {
    e.preventDefault();
    addTodo(value)
    setValue(" ")
  }

  return (
    <form onSubmit={handleSubmit}> 
      <input type="text" value={value} placeholder='What is the task?' onChange={(e)=>setValue(e.target.value)}/>
      <button type='submit'>Add Task</button>
    </form>
  )
}

export default TodoForm
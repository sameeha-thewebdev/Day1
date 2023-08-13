import React, {useState} from 'react'

const TodoForm = ({addTodo}) => {
  const [value, setValue] = useState("")

  return (
    <form onSubmit={(e)=>{
      e.preventDefault()
      addTodo(value)
      setValue(" ")
    }}> 
      <input type="text" placeholder='What is the task?' onChange={(e)=>setValue(e.target.value)} value={value}/>
      <button type='submit'>Add Task</button>
    </form>
  )
}

export default TodoForm
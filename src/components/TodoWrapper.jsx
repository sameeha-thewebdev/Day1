import React from 'react'
import TodoForm from './TodoForm'
import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Todo from './Todo'
uuidv4()

const TodoWrapper = () => {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(savedTodos);
  }, []);
  
  const addTodo = (todo) => {
    setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}])
    console.log(todos)
    localStorage.setItem('todos', JSON.stringify(newTodos));
  }

  const toggleComplete = (id) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
    localStorage.setItem('todos', JSON.stringify(newTodos));
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
    localStorage.setItem('todos', JSON.stringify(newTodos));
  }

  return (
    <>
      <h1>Get things done!</h1>
      <TodoForm addTodo={addTodo}/>

      {todos.map((todo, index)=>(
        <Todo task={todo} key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo}/>
      ))}

    </>
  )
}

export default TodoWrapper
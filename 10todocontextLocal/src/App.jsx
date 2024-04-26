import { useState, useEffect } from 'react'
import {TodoProvider} from './contexts'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'
function App() {
  const [todos, setTodos] = useState([]) 
  const addTodo = (todo) => {//ye functionality hai jo kahi se bhi call kr sakte hai
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev] ) 
  }
  //prev is itself a array with object as value ,above array is saved as string in localStorage.
  const updateTodo = (id, todo) => {//ye functionality hai jo kahi se bhi call kr sakte hai
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo )))
  }
  const deleteTodo = (id) => {//ye functionality hai jo kahi se bhi call kr sakte hai
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }
  const toggleComplete = (id) => {  //ye functionality hai jo kahi se bhi call kr sakte hai
    //console.log(id);
    setTodos((prev) => 
    prev.map((prevTodo) => 
      prevTodo.id === id ? { ...prevTodo, 
        completed: !prevTodo.completed } : prevTodo))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos)) //first time mai empty array set krega
  }, [todos])
  
  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (  //todos is an array with object as values ,todo is obj, we are passing object
                          <div key={todo.id}
                          className='w-full'
                          >
                            <TodoItem todo={todo} />   
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App

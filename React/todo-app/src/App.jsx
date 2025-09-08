/** React Stuff */
import { useState } from 'react'
/** Components */
import Todo from './components/Todo'
import Button from './components/Button'
import Counters from './components/Counters'

/** CSS */
import './App.css'


function App() {


  const [todos, setTodos] = useState([])

  const totalTodos = todos.length
  const uncheckedTodos = todos.filter((todo) => !todo.completed).length
  // const uncheckecTotal = todos.reduce((acc, todo) => {
  //   return todo.completed ? acc : acc + 1
  // }, 0)

  const addTodo = () => {
    
    const todo = {
      id: new Date().getTime(),
      title: prompt("Enter a new task"),
      completed: false,
    }
    console.log("Antes",todos)
    // todos.push(todo)
    setTodos([...todos, todo])
    
    console.log("Despues",todos)
  }

  const deleteTodo = (id) => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const updateTodo = (id) => {
    const newTodos = todos.map(todo => {
      return todo.id === id ? { ...todo, completed: !todo.completed } : todo
    })

    setTodos(newTodos)
  }


  const editTodoTitle = (id) => {
    const nuevoTitulo =prompt("Ingrese el nuevo nombre de la tarea")
    const editTodosNames = todos.map(todo => todo.id === id ? {...todo,title:nuevoTitulo} : todo);
    setTodos(editTodosNames)
  };

  return (
    <>
      <div className="container center">
        <h1 className="center title">TODO App</h1>
        <Counters totalTodos={totalTodos} uncheckedTodos={uncheckedTodos} />
        {/* <button className="button center" onClick="addTodo()">Agregar Tarea</button> */}
        <Button className={"button center"} text={"Add Todo"} callBack={addTodo} />
        <ul id="todo-list" className="todo-list">
          {
            todos.length > 0 ?
            todos.map((todo) => {
              return (
                <Todo key={todo.id} todo={todo} onclickRemove={deleteTodo} onToogle={updateTodo} onEditTitle={editTodoTitle}/>
              )
            }) :
            <li className="empty-state">
              <div className="empty-state-content">
                <div className="empty-state-icon">📝</div>
                <h3 className="empty-state-title">No todos yet!</h3>
                <p className="empty-state-message">Start by adding your first task above</p>
                <div className="empty-state-decoration">
                  <span>✨</span>
                  <span>🚀</span>
                  <span>✨</span>
                </div>
              </div>
            </li>
          }
            {/* <Todo /> */}
            

        </ul>
      </div>
    </>
  )
}

export default App

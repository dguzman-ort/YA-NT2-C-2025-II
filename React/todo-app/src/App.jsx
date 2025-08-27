import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  return (
    <>
      <div class="container center">
        <h1 class="center title">TODO App</h1>
        <div class="flow-right controls">
          <span>Item count: <span id="item-count">0</span></span>
          <span>Unchecked count: <span id="unchecked-count">0</span></span>
        </div>
        <button class="button center" onClick="addTodo()">Agregar Tarea</button>
        <ul id="todo-list" class="todo-list">
          <li class="todo-container">
            <input type="checkbox" />
            <span>Tarea 1</span>
            <button> X </button>
          </li>
        </ul>
      </div>
    </>
  )
}

export default App

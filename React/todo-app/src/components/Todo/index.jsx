/** Components */
import Button from '../Button'

const Todo = ({ todo, onclickRemove, onToogle,onEditTitle }) => {
  
  return(
    <li className="todo-container">
      <input type="checkbox" checked={todo.completed} onChange={() => onToogle(todo.id)} />
      <span>{todo.title}</span>
      <Button text={"X"} className={"todo-delete"} callBack={() => onclickRemove(todo.id)} />
        <Button text={"Editar nombre"} className={"todo-edit"} callBack={() => onEditTitle(todo.id)}
/>
    </li>
  )
}

export default Todo
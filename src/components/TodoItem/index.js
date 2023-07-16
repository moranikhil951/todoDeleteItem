// Write your code here
import './index.css'

const TodoItem = props => {
  const {userTodo, onDeleteUser} = props
  const {title, id} = userTodo

  const onDelete = () => {
    onDeleteUser(id)
  }

  return (
    <li className="listed-items">
      <p className="para">{title}</p>
      <button className="button-Click" type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem

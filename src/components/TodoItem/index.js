import './index.css'

const TodoItem = props => {
  const {todo, deleteUser} = props
  const {title, id} = todo
  const onDelete = () => {
    deleteUser(id)
  }
  return (
    <li className="container">
      <p>{title}</p>
      <button type="button" onClick={onDelete}>
        delete
      </button>
    </li>
  )
}

export default TodoItem

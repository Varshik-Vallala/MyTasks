import './index.css'

const TasksList = props => {
  const {tasks} = props
  const {task, tag} = tasks

  return (
    <li className="each-task">
      <h3>{task}</h3>
      <p className="task-tag">{tag}</p>
    </li>
  )
}

export default TasksList

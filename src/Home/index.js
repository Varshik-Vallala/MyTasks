import {Component} from 'react'

// import CreateTask from '../CreateTask'

import {v4 as uuidv4} from 'uuid'

import TasksList from '../TasksList'

import TagsList from '../TagsList'

import './index.css'

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

class Home extends Component {
  state = {
    tasksList: [],
    task: '',
    tag: tagsList[0].displayText,
    tagsFilter: '',
  }

  onChangeInput = event => {
    // console.log(event.target.value)
    this.setState({task: event.target.value})
  }

  onChangeTag = event => {
    // console.log(event.target.value)
    this.setState({tag: event.target.value})
  }

  onClickAddTask = event => {
    const {task, tag} = this.state

    event.preventDefault()

    if (task !== '' && tag !== '') {
      this.setState(prevState => ({
        tasksList: [...prevState.tasksList, {id: uuidv4(), task, tag}],
      }))

      this.setState({task: '', tag: tagsList[0].displayText})
    }
  }

  onSelectTag = id => {
    // console.log(id)

    const {tagsFilter} = this.state

    this.setState({tagsFilter: id})

    if (id === tagsFilter) {
      this.setState({tagsFilter: ''})
    }
  }

  render() {
    const {tag, task, tasksList, tagsFilter} = this.state

    // console.log(tasksList)

    // console.log(tagsFilter)

    const showList =
      tagsFilter === ''
        ? tasksList
        : tasksList.filter(eachTask => eachTask.tag === tagsFilter)

    // const filteredList =
    console.log(showList)

    return (
      <div className="main-container">
        <div className="form-container">
          <h1 className="heading">Create a task!</h1>
          <form onSubmit={this.onClickAddTask}>
            <div className="input-container">
              <label htmlFor="input">Task</label>
              <input
                type="text"
                id="input"
                value={task}
                placeholder="Enter the task here"
                onChange={this.onChangeInput}
                className="input-element"
              />
            </div>
            <div className="input-container">
              <label htmlFor="tagsDropdown">Tags</label>
              <select
                className="input-element"
                value={tag}
                id="tagsDropdown"
                onChange={this.onChangeTag}
              >
                {tagsList.map(eachTag => (
                  <option key={eachTag.optionId} value={eachTag.displayText}>
                    {eachTag.displayText}
                  </option>
                ))}
              </select>
            </div>
            <button className="add-task-button" type="submit">
              Add Task
            </button>
          </form>
        </div>
        <div className="tags-tasks-list-container">
          <div>
            <h1>Tags</h1>
            <ul className="filter-tags-list">
              {tagsList.map(eachTag => (
                <TagsList
                  tagDetails={eachTag}
                  key={eachTag.optionId}
                  onSelectTag={this.onSelectTag}
                  isActive={tagsFilter === eachTag.displayText}
                />
              ))}
            </ul>
          </div>
          <div className="tasks-container">
            <h1>Tasks</h1>
            {showList.length > 0 ? (
              <ul className="tasks-list">
                {showList.map(eachTask => (
                  <TasksList tasks={eachTask} key={eachTask.id} />
                ))}
              </ul>
            ) : (
              <div className="empty-view">
                <p className="empty-view-message">No Tasks Added Yet</p>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Home

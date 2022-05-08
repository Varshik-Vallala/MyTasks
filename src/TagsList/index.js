import './index.css'

const TagsList = props => {
  const {tagDetails, onSelectTag, isActive} = props
  const {displayText} = tagDetails

  const selectTag = () => {
    onSelectTag(displayText)
  }

  const activeTag = isActive ? 'active-tag' : null

  return (
    <li onClick={selectTag}>
      <button className={`each-tag ${activeTag}`} type="button">
        {displayText}
      </button>
    </li>
  )
}

export default TagsList

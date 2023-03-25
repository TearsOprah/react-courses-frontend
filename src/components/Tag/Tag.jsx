import './Tag.scss'

export default function Tag(props) {

  const onClickTag = () => {
    if (props.activeTag === props.value) {
      props.onClickTag(false)
    } else {
      props.onClickTag(props.value)
    }
  }

  return (
    <p onClick={onClickTag} className={`tag ${props.inactive && 'tag-inactive'} ${props.activeTag === props.value ? 'tag-active' : ''}`}>{props.value}</p>
  )
}
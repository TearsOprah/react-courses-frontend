import './Tag.scss'

export default function Tag(props) {

  const onClickTag = () => {
    props.onClickTag(props.value)
  }

  return (
    <p onClick={onClickTag} className={`tag ${props.activeTag === props.value ? 'tag-active' : ''}`}>{props.value}</p>
  )
}
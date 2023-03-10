import './Tag.scss'

export default function Tag(props) {
  return (
    <p className={'tag'}>{props.value}</p>
  )
}
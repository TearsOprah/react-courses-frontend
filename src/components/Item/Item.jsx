import './Item.scss'

export default function Item(props) {

  function handleItemClick() {
    props.onItemClick(props.item)
  }

  function handleButtonClick(ev) {
    ev.stopPropagation()
    console.log('button')
  }

  return (
    <li className={'item'} onClick={handleItemClick}>
      <img className={'item-image'} src={props.item.image} />
      <h3 className={'item-title'}>{props.item.title}</h3>
      <p className={'item-description'}>{props.item.description}</p>
      <button className={'item-button'} onClick={handleButtonClick}>Начать</button>
    </li>
  )
}
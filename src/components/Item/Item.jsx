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
      <img className={'item-image'} src={props.item.image} alt={`${props.item.title} logo`}/>
      <h3 className={'item-title'}>{props.item.title}</h3>
      <p className={'item-description'}>{props.item.description.slice(0, 120)}...</p>
      <p className={'item-price'}>
        {props.item.price === 'free' ? 'бесплатно' : Number(props.item.price).toLocaleString('ru-RU', {
          style: 'currency',
          currency: 'RUB',
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        })}
      </p>
      <button className={'item-button'} onClick={handleButtonClick}>Начать</button>
    </li>
  )
}
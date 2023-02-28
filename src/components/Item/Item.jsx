import './Item.scss'
import logoImage from '../../images/logo.png'

export default function Item(props) {
  return (
    <li className={'item'}>
      <img className={'item-image'} src={logoImage} />
      <h3 className={'item-title'}>Какой-то заголовок</h3>
      <p className={'item-description'}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      <button className={'item-button'}>Начать</button>
    </li>
  )
}
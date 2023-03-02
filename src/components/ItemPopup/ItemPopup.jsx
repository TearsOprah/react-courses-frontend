import './ItemPopup.scss'
export default function ItemPopup(props) {
  return (
    <div className={'popup popup_type_item' + (props.isOpen && ' popup_opened')}>
      <div className={'popup-container'}>
        <img className={'popup-image'} src={props.item.image}/>
        <h3 className={'popup-title'}>{props.item.title}</h3>
        <p className={'popup-description'}>{props.item.description}</p>
        <button onClick={props.onClose}>закрыть попап</button>
      </div>
    </div>
  )
}
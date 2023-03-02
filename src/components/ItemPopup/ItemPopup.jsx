import './ItemPopup.scss'
export default function ItemPopup(props) {
  console.log('попап сработал')
  return (
    <div className={'popup popup_type_item' + (props.isOpen && ' popup_opened')}>
      <div>
        <h3>Это попап</h3>
        <button onClick={props.onClose}>закрыть попап</button>
      </div>
    </div>
  )
}
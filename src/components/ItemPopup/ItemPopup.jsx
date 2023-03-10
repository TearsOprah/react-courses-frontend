import './ItemPopup.scss'
export default function ItemPopup(props) {
  return (
    <div className={'popup popup_type_item' + (props.isOpen && ' popup_opened')}>
      <div className={'popup-container'}>
        <img className={'popup-image'} src={props.item.image} alt='логотип образовательной платформы'/>
        <h3 className={'popup-title'}>{props.item.title}</h3>
        <p className={'popup-description'}>{props.item.description}</p>
        <button className={'popup-closer'} onClick={props.onClose}></button>
        <p className={'popup-price'}>
          {props.item.price === 'free' ? 'бесплатно' : `Стоимость курса: ` + Number(props.item.price).toLocaleString('ru-RU', {
            style: 'currency',
            currency: 'RUB',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          })}
        </p>

        <a className={'popup-link'} href='#' target='_blank'>Перейти на сайт</a>
      </div>
    </div>
  )
}
import './ItemPopup.scss'
import Tag from "../Tag/Tag";
export default function ItemPopup(props) {

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      props.onClose();
    }
  };

  return (
    <div className={'popup popup_type_item' + (props.isOpen && ' popup_opened')} onClick={handleOverlayClick} >
      <div className={'popup-container'} onClick={(e) => e.stopPropagation()} >
        <img className={'popup-image'} src={props.item.image} alt='логотип образовательной платформы'/>
        <h3 className={'popup-title'}>{props.item.title}</h3>
        <p className={'popup-description'}>{props.item.description}</p>
        <button className={'popup-closer'} onClick={props.onClose}></button>
        <div className={'popup-tags'}>
          {props.item && props.item.tags && props.item.tags.map((tag, index) => <Tag inactive={true} key={index} value={tag} />)}
        </div>
        <p className={'popup-price'}>
          {props.item.price === 'free' ? 'Можно учиться бесплатно' : `Стоимость курса: ` + Number(props.item.price).toLocaleString('ru-RU', {
            style: 'currency',
            currency: 'RUB',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          })}
        </p>

        <a className={'popup-link'} target='_blank'>Перейти на сайт</a>
      </div>
    </div>
  )
}
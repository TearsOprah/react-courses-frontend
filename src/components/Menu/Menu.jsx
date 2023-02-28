import './Menu.scss'
import logoImage from '../../images/logo.png'

export default function Menu(props) {
  return (
    <div className={'menu'}>
      <div className={'company-info'}>
        <img className={'company-logo'} src={logoImage}/>
        <h2 className={'company-name'}>My Company</h2>
      </div>
      <ul className={'menu-categories'}>
        <li className={'category category-active'}>Категория 1</li>
        <li className={'category'}>Категория 2</li>
        <li className={'category'}>Категория 3</li>
        <li className={'category'}>Категория 4</li>
        <li className={'category'}>Категория 5</li>
        <li className={'category'}>Категория 6</li>
      </ul>
      <h2 className={'other-links-title'}>Тут дополнительные ссылки</h2>
      <ul className={'other-links'}>
        <li className={'link'}>Еще какая-то ссылка</li>
        <li className={'link'}>Еще какая-то ссылка</li>
        <li className={'link'}>Еще какая-то ссылка</li>
      </ul>
    </div>
  )
}
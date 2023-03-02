import './Menu.scss'
import logoImage from '../../images/logo.png'
import Categories from "../Categories/Categories";

export default function Menu(props) {
  return (
    <>
      <div className={'menu'}>
        <Categories />
        <h2 className={'other-links-title'}>Тут дополнительные ссылки</h2>
        <ul className={'other-links'}>
          <li className={'link'}>Еще какая-то ссылка</li>
          <li className={'link'}>Еще какая-то ссылка</li>
          <li className={'link'}>Еще какая-то ссылка</li>
          <li className={'link'}>Еще какая-то ссылка</li>
          <li className={'link'}>Еще какая-то ссылка</li>
          <li className={'link'}>Еще какая-то ссылка</li>
        </ul>
      </div>
    </>
  )
}
import './Menu.scss'
import Categories from "../Categories/Categories";

export default function Menu({ activeIndexCategory, onClickCategory }) {

  return (
    <>
      <div className={'menu'}>
        <Categories activeIndexCategory={activeIndexCategory} onClickCategory={(index) => onClickCategory(index)} />
        <h2 className={'other-links-title'}>Тут дополнительные ссылки</h2>
        <ul className={'other-links'}>
          <li className={'link'}>Еще какая-то ссылка</li>
          <li className={'link'}>Еще какая-то ссылка</li>
        </ul>
        <h2 className={'tags-title'}>Теги</h2>
        <ul className={'menu-tags'}>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </div>
    </>
  )
}
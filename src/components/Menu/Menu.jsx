import './Menu.scss'
import Categories from "../Categories/Categories";
import Tag from "../Tag/Tag";

export default function Menu({ items, activeIndexCategory, onClickCategory }) {

  // получаем список уникальных тегов
  const uniqueTags = {};
  items.forEach(course => {
    course.tags.forEach(tag => {
      uniqueTags[tag] = true;
    });
  });

  const tagList = Object.keys(uniqueTags);

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
          {tagList.map((tag, index)=> <Tag key={index} value={tag} />)}
        </ul>
      </div>
    </>
  )
}
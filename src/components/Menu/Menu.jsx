import './Menu.scss'
import Categories from "../Categories/Categories";
import Tag from "../Tag/Tag";

export default function Menu({ activeIndexCategory,
                               onClickCategory,
                               activeTag,
                               onClickTag,
                               activeCategory }) {

  // получаем список уникальных тегов
  const uniqueTags = {};
  activeCategory.forEach(course => {
    course.tags.forEach(tag => {
      uniqueTags[tag] = true;
    });
  });

  const tagList = Object.keys(uniqueTags);

  return (
    <>
      <div className={'menu'}>
        <Categories activeIndexCategory={activeIndexCategory}
                    onClickCategory={(index) => onClickCategory(index)} />
        <h2 className={'other-links-title'}>Тут дополнительные ссылки</h2>
        <ul className={'other-links'}>
          <li className={'link'}>Еще какая-то ссылка</li>
          <li className={'link'}>Еще какая-то ссылка</li>
        </ul>
        <h2 className={'tags-title'}>Теги</h2>
        <ul className={'menu-tags'}>
          {tagList.sort().map((tag, index)=> <Tag onClickTag={(tag) => onClickTag(tag)} activeTag={activeTag} key={index} value={tag} />)}
        </ul>
      </div>
    </>
  )
}
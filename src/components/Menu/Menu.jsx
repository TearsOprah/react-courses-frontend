import './Menu.scss'
import Categories from "../Categories/Categories";
import Tag from "../Tag/Tag";

export default function Menu({ activeIndexCategory,
                               onClickCategory,
                               activeTag,
                               onClickTag,
                               handleHideMenu,
                               activeCategory,
                               menuIsHide}) {

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
      <div className={`menu ${menuIsHide ? 'menu-hide' : ''}`}>
        <Categories activeIndexCategory={activeIndexCategory}
                    menuIsHide={menuIsHide}
                    onClickCategory={(index) => onClickCategory(index)} />
        {!menuIsHide &&
          <>
            <h2 className={'other-links-title'}>Тут дополнительные ссылки</h2>
            <ul className={'other-links'}>
              <li className={'link'}>Еще какая-то ссылка</li>
              <li className={'link'}>Еще какая-то ссылка</li>
            </ul>
            <h2 className={'tags-title'}>Теги</h2>
            <ul className={'menu-tags'}>
              {tagList.sort().map((tag, index)=> <Tag onClickTag={(tag) => onClickTag(tag)} activeTag={activeTag} key={index} value={tag} />)}
            </ul>
          </>}
        <button onClick={handleHideMenu} className={'menu-hide-button'}>
          {menuIsHide ? <>&rarr;</> : <>&larr;</>}
        </button>
      </div>
    </>
  )
}
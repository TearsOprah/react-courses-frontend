import './Categories.scss'

export default function Categories({ activeIndexCategory, onClickCategory }) {

  const categories = [
    'Дизайн',
    'Анимация',
    'Разработка',
    'Иностранные языки',
    'Маркетинг',
    'Все курсы',
  ]

  return (
    <ul className={'menu-categories'}>
      {categories.map((category, index) =>
        <li className={`category ${activeIndexCategory === index ? 'category-active' : ''}`}
            key={index}
            onClick={() => onClickCategory(index)}>
          {category}
        </li>
      )}
    </ul>
  )
}
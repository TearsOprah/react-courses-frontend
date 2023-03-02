import './Categories.scss'
import {useState} from "react";

export default function Categories(props) {

  const categories = [
    'Дизайн',
    'Анимация',
    'Разработка',
    'Иностранные языки',
    'Маркетинг',
    'Еще категория',
    'Еще категория',
    'Еще категория',
    'Еще категория',
    'Еще категория',
    'Еще категория',
  ]

  const [activeIndexCategory, setActiveIndexCategory] = useState(false)

  const onClickCategory = (index) => {
    setActiveIndexCategory(index)
  }

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
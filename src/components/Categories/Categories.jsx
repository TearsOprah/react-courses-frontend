import './Categories.scss'
import '../../scss/variables.scss'
import designIcon from '../../images/icon_for_courses_react/design.svg'
import animationIcon from '../../images/icon_for_courses_react/animation.svg'
import developmentIcon from '../../images/icon_for_courses_react/development.svg'
import languageIcon from '../../images/icon_for_courses_react/language.svg'
import marketingIcon from '../../images/icon_for_courses_react/marketing.svg'
import allIcon from '../../images/icon_for_courses_react/all.svg'

export default function Categories({ activeIndexCategory, onClickCategory }) {

  const categories = [
    'Дизайн',
    'Анимация',
    'Разработка',
    'Иностранные языки',
    'Маркетинг',
    'Все курсы',
  ]

  const icons = {
    'Дизайн': designIcon,
    'Анимация': animationIcon,
    'Разработка': developmentIcon,
    'Иностранные языки': languageIcon,
    'Маркетинг': marketingIcon,
    'Все курсы': allIcon
  }

  return (
    <ul className={'menu-categories'}>
      {categories.map((category, index) =>
        <li className={`category ${activeIndexCategory === index ? 'category-active' : ''}`}
            key={index}
            onClick={() => onClickCategory(index)}>
          <img className={`category-icon ${activeIndexCategory === index ? 'category-icon-active' : ''}`} src={icons[category]} alt={`${category} icon`} />
          {category}
        </li>
      )}
    </ul>
  )
}
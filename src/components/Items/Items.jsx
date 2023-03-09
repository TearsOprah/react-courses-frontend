import './Items.scss'
import Item from "../Item/Item";
import {useEffect, useState} from "react";


export default function Items(props) {

  // объект с названиями категорий
  const categoriesId = {
    0: 'design',
    1: 'animation',
    2: 'development',
    3: 'language',
    4: 'marketing',
  }

  // пустой массив изначально, после обращения к api -> заменяем полученными данными
  const [items, setItems] = useState([])
  // получаем массив с курсами, следим за изменение активной категории
  useEffect(() => {
    fetch(`https://react-courses-backend.vercel.app/courses/${props.activeIndexCategory === 5 ? '' : `${categoriesId[props.activeIndexCategory]}`}`)
      .then(res => res.json())
      .then(data => {
        // заменяем полученными данными
        setItems(data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [props.activeIndexCategory])

  return (
    <ul className={'items'}>
      {
        items.map((item, index) =>
          <Item key={index}
                item={item}
                onItemClick={props.onItemClick} />
        )
      }
    </ul>
  )
}
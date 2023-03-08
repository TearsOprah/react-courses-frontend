import './Items.scss'
import Item from "../Item/Item";
import {useEffect, useState} from "react";


export default function Items(props) {

  // пустой массив изначально, после обращения к api -> заменяем полученными данными
  const [items, setItems] = useState([])

  // однократно при загрузке получаем массив с курсами
  useEffect(() => {
    fetch('http://localhost:4000/courses/')
      .then(res => res.json())
      .then(data => {
        // заменяем полученными данными
        setItems(data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

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
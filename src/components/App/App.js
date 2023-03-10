import './App.scss';
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import Background from "../Background/Background";
import Items from "../Items/Items";
import {useState} from "react";
import ItemPopup from "../ItemPopup/ItemPopup";
import { useEffect } from "react";


function App() {

  // выбор активной категории
  const [activeIndexCategory, setActiveIndexCategory] = useState(5)
  const onClickCategory = (index) => {
    setActiveIndexCategory(index)
  }

  // логика для items
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
    fetch(`https://react-courses-backend.vercel.app/courses/${activeIndexCategory === 5 ? '' : `${categoriesId[activeIndexCategory]}`}`)
      .then(res => res.json())
      .then(data => {
        // заменяем полученными данными
        setItems(data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [activeIndexCategory])

  // логика открытия попапа с курсом
  function handleItemClick(item) {
    setSelectedItem(item)
    setIsItemPopupOpen(true)
  }

  // закрытие попапа
  function closeAllPopups() {
    setIsItemPopupOpen(false)
    setSelectedItem({})
  }

  const [selectedItem, setSelectedItem] = useState({})
  const [isItemPopupOpen, setIsItemPopupOpen] = useState(false)

  return (
    <div className="App">
      <Header />
      <Menu items={items} activeIndexCategory={activeIndexCategory} onClickCategory={(index) => onClickCategory(index)} />
      <Items items={items} onItemClick={handleItemClick} activeIndexCategory={activeIndexCategory} />
      <Background />
      <ItemPopup item={selectedItem}
                 onClose={closeAllPopups}
                 isOpen={isItemPopupOpen} />
    </div>
  );
}

export default App;

import './App.scss';
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import Background from "../Background/Background";
import Items from "../Items/Items";
import {useState} from "react";
import ItemPopup from "../ItemPopup/ItemPopup";
import { useEffect } from "react";
import ErrorLoad from "../ErrorLoad/ErrorLoad";


function App() {

  // выбор активного тега
  const [activeTag, setActiveTag] = useState(false)
  const onClickTag = (tag) => {
    setActiveTag(tag)
    handlePageChange(1)
  }

  // стейт с курсами выбранной категории
  const [activeCategory, setActiveCategory] = useState([])

  // выбор активной категории
  const [activeIndexCategory, setActiveIndexCategory] = useState(5)
  const onClickCategory = (index) => {
    setActiveTag(false)
    setActiveIndexCategory(index)
    handlePageChange(1)
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

  // стейт для ошибки получения данных с сервера
  const [hasError, setHasError] = useState(false);

  // пустой массив изначально, после обращения к api -> заменяем полученными данными
  const [items, setItems] = useState([])
  // получаем массив с курсами, следим за изменение активной категории
  useEffect(() => {
    fetch(`https://react-courses-backend.vercel.app/courses/${activeIndexCategory === 5 ? '' : `${categoriesId[activeIndexCategory]}`}`)
      .then(res => res.json())
      .then(data => {

        setActiveCategory(data)

        if (activeTag) {
          // фильтруем курсы по активному тегу
          const filteredData = data.filter(course => course.tags.includes(activeTag))
          setItems(filteredData)
          console.log(filteredData)
        } else {
          setItems(data)
        }
        setHasError(false); // сбрасываем состояние ошибки при успешном получении данных

      })
      .catch(err => {
        console.log(err)
        setHasError(true); // устанавливаем состояние ошибки в true при ошибке получения данных
      })
  }, [activeIndexCategory, activeTag])

  // логика открытия попапа с курсом
  function handleItemClick(item) {
    setSelectedItem(item)
    setIsItemPopupOpen(true)
  }


  const [selectedItem, setSelectedItem] = useState({})
  const [isItemPopupOpen, setIsItemPopupOpen] = useState(false)


  // закрытие попапа
  function closeAllPopups() {
    setIsItemPopupOpen(false)
    setSelectedItem({})
  }


  // логика закрытия попапа на esc
  const isOpen = isItemPopupOpen

  useEffect(() => {
    function closeByEscape(evt) {
      if (evt.key === 'Escape') {
        closeAllPopups();
      }
    }

    if (isOpen) { // навешиваем только при открытии попапов
      document.addEventListener('keydown', closeByEscape);
      return () => {
        document.removeEventListener('keydown', closeByEscape);
      }
    }
  }, [isOpen])

  // пагинация
  const [currentPage, setCurrentPage] = useState(1)

  function handlePageChange(pageNumber) {
    setCurrentPage(pageNumber);
  }

  return (
    <div className="App">
      <Header />

      <Menu activeTag={activeTag}
            onClickTag={(tag) => onClickTag(tag)}
            activeIndexCategory={activeIndexCategory}
            onClickCategory={(index) => onClickCategory(index)}
            activeCategory={activeCategory}
      />

      {hasError ? <ErrorLoad /> : <Items items={items}
                                         currentPage={currentPage}
                                         handlePageChange={handlePageChange}
                                         onItemClick={handleItemClick}
                                         activeIndexCategory={activeIndexCategory} />}

      <Background />

      <ItemPopup item={selectedItem}
                 onClose={closeAllPopups}
                 isOpen={isItemPopupOpen} />
    </div>
  );
}

export default App;

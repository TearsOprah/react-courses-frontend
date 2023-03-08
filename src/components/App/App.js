import './App.scss';
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import Background from "../Background/Background";
import Items from "../Items/Items";
import {useState} from "react";
import ItemPopup from "../ItemPopup/ItemPopup";


function App() {

  // выбор активной категории
  const [activeIndexCategory, setActiveIndexCategory] = useState(false)
  const onClickCategory = (index) => {
    setActiveIndexCategory(index)
  }

  // открытие попапа с курсом
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
      // прокидываем стейт категории с функцией в Categories сквозь Menu
      <Menu activeIndexCategory={activeIndexCategory} onClickCategory={(index) => onClickCategory(index)} />
      <Items onItemClick={handleItemClick}/>
      <Background />
      <ItemPopup item={selectedItem}
                 onClose={closeAllPopups}
                 isOpen={isItemPopupOpen} />
    </div>
  );
}

export default App;

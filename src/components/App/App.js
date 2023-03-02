import './App.scss';
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import Background from "../Background/Background";
import Items from "../Items/Items";
import {useState} from "react";
import ItemPopup from "../ItemPopup/ItemPopup";

function App() {

  function handleItemClick(item) {
    setSelectedItem(item)
    setIsItemPopupOpen(true)
  }

  function closeAllPopups() {
    setIsItemPopupOpen(false)
    setSelectedItem({})
  }

  const [selectedItem, setSelectedItem] = useState({})
  const [isItemPopupOpen, setIsItemPopupOpen] = useState(false)

  return (
    <div className="App">
      <Header />
      <Menu />
      <div>
        <Items onItemClick={handleItemClick}/>
      </div>
      <Background />
      <ItemPopup item={selectedItem}
                 onClose={closeAllPopups}
                 isOpen={isItemPopupOpen} />
    </div>
  );
}

export default App;

import './App.scss';
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import Background from "../Background/Background";
import Items from "../Items/Items";

function App() {
  return (
    <div className="App">
      <Menu />
      <Items />
      <Background />
    </div>
  );
}

export default App;

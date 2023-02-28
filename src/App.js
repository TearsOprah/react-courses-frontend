import './scss/App.scss';
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Background from "./components/Background/Background";
import Items from "./components/Items/Items";

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

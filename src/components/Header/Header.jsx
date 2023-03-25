import './Header.scss';
import logoImage from "../../images/logo.png";
import Search from "../Search/Search";

export default function Header() {
  return (
    <header className={'header'}>
      <div className={'company-info'}>
        <img className={'company-logo'} src={logoImage} alt={'company logo'}/>
        <h2 className={'company-name'}>My Company</h2>
      </div>
      {/*<Search />*/}
    </header>
  )
}
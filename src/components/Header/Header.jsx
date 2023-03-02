import './Header.scss';
import logoImage from "../../images/logo.png";

export default function Header() {
  return (
    <header className={'header'}>
      <div className={'company-info'}>
        <img className={'company-logo'} src={logoImage}/>
        <h2 className={'company-name'}>My Company</h2>
      </div>
    </header>
  )
}
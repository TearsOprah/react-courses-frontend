import bg_1 from '../../images/bg_1.png'
import bg_2 from '../../images/bg_2.png'
import bg_3 from '../../images/bg_3.png'
import './Background.scss'

export default function Background() {
  return (
    <>
      <img className={'bg_1'} src={bg_1}/>
      <img className={'bg_2'} src={bg_2}/>
      <img className={'bg_3'} src={bg_3}/>
    </>
  )
}
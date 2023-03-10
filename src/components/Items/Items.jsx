import './Items.scss'
import Item from "../Item/Item";

export default function Items(props) {

  return (
    <ul className={'items'}>
      {
        props.items && props.items.map((item, index) =>
          <Item key={index}
                item={item}
                onItemClick={props.onItemClick} />
        )
      }
    </ul>
  )
}
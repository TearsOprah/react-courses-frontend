import './Items.scss'
import Item from "../Item/Item";

const testItems = [
  {
    title: 'Название первого курса',
    description: 'Какое-то детальное описание первого курса. Плюсы и минусы и тд.',
    image: 'https://cybersport.metaratings.ru/upload/iblock/640/640eb947e68699f0b937079c5e12bcd0.jpg'
  },

  {
    title: 'Название второго курса',
    description: 'Какое-то детальное описание второго курса. Плюсы и минусы и тд.',
    image: 'https://yt3.googleusercontent.com/-pnsqu0xQYwxMhUVq-HZJHf691DEhTlEl1fZvjUtUwJIKMyTqXDBVvK7d2dSjFUTYdHFpTYvAo8=s900-c-k-c0x00ffffff-no-rj'
  },

  {
    title: 'Название третьего курса',
    description: 'Какое-то детальное описание третьего курса. Плюсы и минусы и тд.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/42/Stepik_logotype.png'
  },

  {
    title: 'Название первого курса',
    description: 'Какое-то детальное описание первого курса. Плюсы и минусы и тд.',
    image: 'https://cybersport.metaratings.ru/upload/iblock/640/640eb947e68699f0b937079c5e12bcd0.jpg'
  },

  {
    title: 'Название второго курса',
    description: 'Какое-то детальное описание второго курса. Плюсы и минусы и тд.',
    image: 'https://yt3.googleusercontent.com/-pnsqu0xQYwxMhUVq-HZJHf691DEhTlEl1fZvjUtUwJIKMyTqXDBVvK7d2dSjFUTYdHFpTYvAo8=s900-c-k-c0x00ffffff-no-rj'
  },

  {
    title: 'Название третьего курса',
    description: 'Какое-то детальное описание третьего курса. Плюсы и минусы и тд.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/42/Stepik_logotype.png'
  },

  {
    title: 'Название первого курса',
    description: 'Какое-то детальное описание первого курса. Плюсы и минусы и тд.',
    image: 'https://cybersport.metaratings.ru/upload/iblock/640/640eb947e68699f0b937079c5e12bcd0.jpg'
  },

  {
    title: 'Название второго курса',
    description: 'Какое-то детальное описание второго курса. Плюсы и минусы и тд.',
    image: 'https://yt3.googleusercontent.com/-pnsqu0xQYwxMhUVq-HZJHf691DEhTlEl1fZvjUtUwJIKMyTqXDBVvK7d2dSjFUTYdHFpTYvAo8=s900-c-k-c0x00ffffff-no-rj'
  },

  {
    title: 'Название третьего курса',
    description: 'Какое-то детальное описание третьего курса. Плюсы и минусы и тд.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/42/Stepik_logotype.png'
  },

  {
    title: 'Название первого курса',
    description: 'Какое-то детальное описание первого курса. Плюсы и минусы и тд.',
    image: 'https://cybersport.metaratings.ru/upload/iblock/640/640eb947e68699f0b937079c5e12bcd0.jpg'
  },

  {
    title: 'Название второго курса',
    description: 'Какое-то детальное описание второго курса. Плюсы и минусы и тд.',
    image: 'https://yt3.googleusercontent.com/-pnsqu0xQYwxMhUVq-HZJHf691DEhTlEl1fZvjUtUwJIKMyTqXDBVvK7d2dSjFUTYdHFpTYvAo8=s900-c-k-c0x00ffffff-no-rj'
  },

  {
    title: 'Название третьего курса',
    description: 'Какое-то детальное описание третьего курса. Плюсы и минусы и тд.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/42/Stepik_logotype.png'
  },

  {
    title: 'Название первого курса',
    description: 'Какое-то детальное описание первого курса. Плюсы и минусы и тд.',
    image: 'https://cybersport.metaratings.ru/upload/iblock/640/640eb947e68699f0b937079c5e12bcd0.jpg'
  },

  {
    title: 'Название второго курса',
    description: 'Какое-то детальное описание второго курса. Плюсы и минусы и тд.',
    image: 'https://yt3.googleusercontent.com/-pnsqu0xQYwxMhUVq-HZJHf691DEhTlEl1fZvjUtUwJIKMyTqXDBVvK7d2dSjFUTYdHFpTYvAo8=s900-c-k-c0x00ffffff-no-rj'
  },

  {
    title: 'Название третьего курса',
    description: 'Какое-то детальное описание третьего курса. Плюсы и минусы и тд.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/42/Stepik_logotype.png'
  },

  {
    title: 'Название первого курса',
    description: 'Какое-то детальное описание первого курса. Плюсы и минусы и тд.',
    image: 'https://cybersport.metaratings.ru/upload/iblock/640/640eb947e68699f0b937079c5e12bcd0.jpg'
  },

  {
    title: 'Название второго курса',
    description: 'Какое-то детальное описание второго курса. Плюсы и минусы и тд.',
    image: 'https://yt3.googleusercontent.com/-pnsqu0xQYwxMhUVq-HZJHf691DEhTlEl1fZvjUtUwJIKMyTqXDBVvK7d2dSjFUTYdHFpTYvAo8=s900-c-k-c0x00ffffff-no-rj'
  },

  {
    title: 'Название третьего курса',
    description: 'Какое-то детальное описание третьего курса. Плюсы и минусы и тд.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/42/Stepik_logotype.png'
  },
]


export default function Items(props) {
  return (
    <ul className={'items'}>
      {
        testItems.map((item, index) =>
          <Item key={index}
                item={item}
                onItemClick={props.onItemClick} />
        )
      }
    </ul>
  )
}
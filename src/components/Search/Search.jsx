import './Search.scss'
import { useState} from "react";

export default function Search() {
  return (
    <input className={'search-input'} placeholder={'Поиск'} type={'text'} />
  )
}

import './Items.scss'
import Item from "../Item/Item";
import {useState} from "react";

export default function Items(props) {

  // пагинация

  const [currentPage, setCurrentPage] = useState(1)
  // кол-во элементов на странице
  const ITEMS_PER_PAGE = 12;
  // общее кол-во элементов
  const TOTAL_ITEMS = props.items.length;
  // кол-во страниц
  const totalPages = Math.ceil(TOTAL_ITEMS / ITEMS_PER_PAGE);

  function handlePageChange(pageNumber) {
    setCurrentPage(pageNumber);
  }

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = currentPage * ITEMS_PER_PAGE;

  // return (
  //   <ul className={'items'}>
  //     {
  //       props.items && props.items.map((item, index) =>
  //         <Item key={index}
  //               item={item}
  //               onItemClick={props.onItemClick} />
  //       )
  //     }
  //   </ul>
  // )

  return (
    <div className="items">
      {props.items.slice(startIndex, endIndex).map((item, index) => (
        <Item key={index} item={item} onItemClick={props.onItemClick} />
      ))}
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
          <button
            key={pageNumber}
            className={`page-button ${pageNumber === currentPage ? 'active-page-button' : ''}`}
            onClick={() => handlePageChange(pageNumber)}
          >
            {pageNumber}
          </button>
        ))}
      </div>
    </div>
  );

}
import './Items.scss'
import Item from "../Item/Item";

export default function Items(props) {

  // кол-во элементов на странице
  const ITEMS_PER_PAGE = 12;
  // общее кол-во элементов
  const TOTAL_ITEMS = props.items.length;
  // кол-во страниц
  const totalPages = Math.ceil(TOTAL_ITEMS / ITEMS_PER_PAGE);

  const startIndex = (props.currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = props.currentPage * ITEMS_PER_PAGE;


  return (
    <div className="items">
      {props.items.slice(startIndex, endIndex).map((item, index) => (
        <Item key={index} item={item} onItemClick={props.onItemClick} />
      ))}
      <div className="pagination">
        <p>Страница:</p>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
          <button
            key={pageNumber}
            className={`page-button ${pageNumber === props.currentPage ? 'active-page-button' : ''}`}
            onClick={() => props.handlePageChange(pageNumber)}
          >
            {pageNumber}
          </button>
        ))}
      </div>
    </div>
  );

}
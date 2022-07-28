import React from "react";
import _ from "lodash";

const Pagination = (props) => {
  const { itemsCount, pagesSize, onPageChange, currentPage } = props;
  const pageCount = Math.ceil(itemsCount / pagesSize);
  console.log(currentPage);
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);

  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          {pages.map((page) => (
            <li
              key={page}
              className={
                page === currentPage ? "page-item active" : "page-item"
              }
            >
              <a className="page-link" onClick={() => onPageChange(page)}>
                {page}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
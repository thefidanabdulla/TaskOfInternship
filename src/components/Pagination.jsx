import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";

const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
  const darkMode = useSelector(state => state.darkMode.darkMode);
  const pageNumbers = [];
  const [currentButton, setCurrentButton] = useState(1);
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  const goPage = (number) => {
    paginate(number);
    setCurrentButton((num) => (num = number));
  };
  const goPrevPage = () => {
    setCurrentButton((prev) => (prev === 1 ? prev : prev - 1));
    paginate(currentButton - 1);
  };
  const goNextPage = () => {
    setCurrentButton((next) =>
      next === itemsPerPage.length ? next : next + 1
    );
    paginate(currentButton + 1);
  };

  const shortPaginationNum = () => {
    let paginateNum = [];
    let maxNum =
      currentButton >= Math.ceil(totalItems / itemsPerPage) - 3
      ? Math.ceil(totalItems / itemsPerPage)
      : currentButton + 3
    let minNum = currentButton > 3 ? currentButton - 3 : 1;

    for (let i = minNum; i <= maxNum; i++) {
      paginateNum.push(i);
    }
    return paginateNum;
  };


  
  return (
    <nav>
      <ul className="pagination pagination-sm">
        <li
          className={`${
            currentButton === 1  ?  "page-item disabled" : "page-item"
          }`}
        >
          <Link
            className="page-link"
            to="#"
            aria-label="Previous"
            onClick={() => goPrevPage()}
          >
            <span>&laquo;</span>
          </Link>
        </li>
        {pageNumbers.length <= 10 ? (
          pageNumbers.map((number) => (
            <li
              key={number}
              className={`${
                currentButton === number ? "page-item active" : "page-item"
              }`}
            >
              <Link onClick={() => goPage(number)} to="#" className="page-link">
                {number}
              </Link>
            </li>
          ))
        ) : (
          <>
            <li className={`${currentButton === 1 ? "d-none" : ""}`}>
              <span className={`pagination-ellipsis p-1 ${darkMode ? 'text-white': ''}`}>&hellip;</span>
            </li>
            {shortPaginationNum().map((number) => (
              <li
                key={number}
                className={`${
                  currentButton === number ? "page-item active" : "page-item"
                }`}
              >
                <Link
                  onClick={() => goPage(number)}
                  to="#"
                  className="page-link"
                >
                  {number}
                </Link>
              </li>
            ))}
            <li
              className={`${
                currentButton === Math.ceil(totalItems / itemsPerPage)
                  ? "d-none"
                  : ""
              }`}
            >
              <span className={`pagination-ellipsis p-1 ${darkMode ? 'text-white': ''}`}>&hellip;</span>
            </li>
          </>
        )}
        <li
          className={`${
            currentButton === Math.ceil(totalItems / itemsPerPage)
              ? "page-item disabled"
              : "page-item"
          }`}
        >
          <Link
            className="page-link"
            to="#"
            aria-label="Next"
            onClick={() => goNextPage()}
          >
            <span>&raquo;</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;

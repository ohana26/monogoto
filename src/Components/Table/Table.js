import React, { useState } from "react";
import ReactPaginate from "react-paginate";

export default function Table({ data, columns }) {
  const [pageNumber, SetPageNumber] = useState(0);

  const ChangePage = ({ selected }) => {
    SetPageNumber(selected);
  };

  const coinsPerPage = 10;
  const pageCount = Math.ceil(data.length / coinsPerPage);
  const pagesVisited = pageNumber * coinsPerPage;
  const displayCoins = data.slice(pagesVisited, pagesVisited + coinsPerPage);

  return (
    <div className="border-top-0">
      <div>
        <table className="table" style={{height:"450px"}} >
          <thead>
            <tr>
              {columns.map((column, index) => (
                <td key={column}>{column}</td>
              ))}
            </tr>
          </thead>
          <tbody>
            {displayCoins.map((coin, index) => (
              <tr>
                <td key={index}>
                 {coin}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="footer">
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={ChangePage}
          containerClassName={"paginationButtuns"}
          previousLinkClassName={"previouButton"}
          nextLinkClassName={"nextButton"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        ></ReactPaginate>
      </div>
    </div>
  );
}

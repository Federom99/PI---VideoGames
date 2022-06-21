import React from "react";
import "../styles/PaginadoStyle.css";

export default function Paginado({ gamesPage, allGames, paginado }) {
  const pageNumbers = [];

  for (var i = 1; i <= Math.ceil(allGames / gamesPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pag4">
      {pageNumbers &&
        pageNumbers.map((number, i) => (
          <ul className="ull" key={i}>
            <button className="pag3" onClick={() => paginado(number)}>
              {number}
            </button>
          </ul>
        ))}
    </div>
  );
}

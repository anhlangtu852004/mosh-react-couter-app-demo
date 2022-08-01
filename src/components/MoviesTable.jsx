import React from "react";
import { Link } from "react-router-dom";
import Like from "./common/Like";
import Table from "./common/table";

const MoviesTable = (props) => {
  const { movies, onLike, onDelete, onSort, sortColumn } = props;

  const columns = [
    {
      path: "title",
      label: "Title",
      content: (movie) => (
        <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
      ),
    },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: (movie) => (
        <Like liked={movie.liked} onClick={() => onLike(movie)} />
      ),
    },
    {
      key: "delete",
      content: (movie) => (
        <button onClick={() => onDelete(movie)} className="btn btn-danger">
          Delete
        </button>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      onSort={onSort}
      sortColumn={sortColumn}
      data={movies}
    />
  );
};

export default MoviesTable;

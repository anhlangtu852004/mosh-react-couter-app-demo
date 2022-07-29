import React from "react";
import Like from "./common/Like";
import TableBody from "./common/TableBody";
import TableHeader from "./common/TableHeader";

const MoviesTable = (props) => {
  const { movies, onLike, onDelete, onSort, sortColumn } = props;

  const columns = [
    { path: "title", label: "Title" },
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
        <button
          onClick={() => onDelete(movie)}
          // onClick={() => this.handleDelete(movie._id)}
          className="btn btn-danger"
        >
          Delete
        </button>
      ),
    },
  ];
  // const raiseSort = (path) => {
  //   const sortColumn = { ...sortColumnMovie };
  //   if (sortColumn.path === path)
  //     sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
  //   else {
  //     sortColumn.path = path;
  //     sortColumn.order = "asc";
  //   }
  //   onSort(sortColumn);
  // };

  return (
    <table className="table">
      <TableHeader columns={columns} onSort={onSort} sortColumn={sortColumn} />
      <TableBody data={movies} columns={columns} />
    </table>
  );
};

export default MoviesTable;

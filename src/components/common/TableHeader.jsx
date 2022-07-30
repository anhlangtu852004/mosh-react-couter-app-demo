import React from "react";

const TableHeader = (props) => {
  const { columns, onSort, sortColumn: sortColumnMovie } = props;

  const raiseSort = (path) => {
    const sortColumn = { ...sortColumnMovie };
    if (sortColumn.path === path)
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    onSort(sortColumn);
  };

  const renderSortIcon = (column) => {
    if (column.path !== sortColumnMovie.path) return null;
    if (sortColumnMovie.order === "asc")
      return <i className="fa fa-sort-up"></i>;
    return <i className="fas fa-sort-down"></i>;
  };

  return (
    <thead>
      <tr>
        {columns.map((column) => (
          <th
            style={{ cursor: "pointer" }}
            key={column.path || column.key}
            scope="col"
            onClick={() => raiseSort(column.path)}
          >
            {column.label}
            {renderSortIcon(column)}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;

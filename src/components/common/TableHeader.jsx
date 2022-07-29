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
  return (
    <thead>
      <tr>
        {columns.map((column) => (
          <th
            key={column.path || column.key}
            scope="col"
            onClick={() => raiseSort(column.path)}
          >
            {column.label}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;

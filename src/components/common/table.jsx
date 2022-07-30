import React from "react";

import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

const table = (props) => {
  const { columns, onSort, sortColumn, data } = props;

  return (
    <table className="table">
      <TableHeader columns={columns} onSort={onSort} sortColumn={sortColumn} />
      <TableBody data={data} columns={columns} />
    </table>
  );
};

export default table;

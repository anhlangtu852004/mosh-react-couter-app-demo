import React from "react";
import _ from "lodash";
const pagination = (items, pageNumber, pageSize) => {
  const startIndex = (pageNumber - 1) * pageSize;
  return _(items).slice(startIndex).take(pageSize).value();
  // _.slice(items,startIndex)
  //_.take(items, number)
};

export default pagination;

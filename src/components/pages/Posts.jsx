import React, { Children } from "react";
import { useParams } from "react-router-dom";

const Posts = () => {
  const { year, month } = useParams();
  return (
    <div>
      Year: {year}, Month: {month}
    </div>
  );
};

export default Posts;

import React, { Children } from "react";
import { useParams, Outlet } from "react-router-dom";

const Posts = () => {
  const { year, month } = useParams();
  return (
    <>
      <div>post page</div>
      <Outlet />
    </>
  );
};

export default Posts;

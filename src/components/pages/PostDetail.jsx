import React from "react";
import { Routes, Route, useParams, Outlet, useHref } from "react-router-dom";

const PostDetail = () => {
  let { year, month } = useParams();
  // let { href } = useHref();

  console.log(year);
  console.log(month);
  // console.log(href);
  return (
    <div>
      <h1>
        PostDetail - {year} - {month}
      </h1>
    </div>
  );
};

export default PostDetail;

import React from "react";
import { Routes, Route, useParams, Outlet, useHref } from "react-router-dom";

const ProductDetail = () => {
  let usePa = useParams();
  let { id } = useParams();
  // let { href } = useHref();

  console.log(id);
  console.log(usePa);
  // console.log(href);
  return (
    <div>
      <h1>ProductDetail - {id}</h1>
    </div>
  );
};

export default ProductDetail;

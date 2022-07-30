import React from "react";
import ProductDetail from "./ProductDetail";
import {
  Routes,
  Route,
  useParams,
  Outlet,
  Link,
  useLocation,
} from "react-router-dom";
const Products = (props) => {
  console.log(props);
  const location = useLocation();
  // console.log(path);
  return (
    <div>
      <h1>this is Product</h1>
      <ul>
        <li>
          <Link to={`${location.pathname}/1`} element={<ProductDetail />}>
            product id 1
          </Link>
        </li>
        <li>
          <Link to={`${location.pathname}/2`} element={<ProductDetail />}>
            product id 2
          </Link>
        </li>
        <li>
          <Link to={`${location.pathname}/3`} element={<ProductDetail />}>
            product id 3
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Products;

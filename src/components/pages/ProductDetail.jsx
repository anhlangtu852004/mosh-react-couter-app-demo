import React from "react";
import {
  Routes,
  Route,
  useParams,
  Outlet,
  useHref,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";

const ProductDetail = () => {
  let usePa = useParams();
  let { id } = useParams();
  // let { href } = useHref();
  const navigate = useNavigate();
  let location = useLocation();
  console.log(id);
  console.log(usePa);
  console.log(location);

  return (
    <div>
      <h1>ProductDetail - {id}</h1>
      <button onClick={() => navigate("..", { replace: true })}>
        back lai
      </button>
    </div>
  );
};

export default ProductDetail;

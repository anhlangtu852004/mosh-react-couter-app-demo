import React from "react";
import {
  Routes,
  Route,
  useParams,
  Outlet,
  useSearchParams,
  Navigate,
} from "react-router-dom";

const PostDetail = () => {
  let { year, month } = useParams();
  const [useSearch, setUseSearch] = useSearchParams();

  // cach lay tat ca querry search
  // console.log([...useSearch]);
  // console.log(Object.fromEntries([...useSearch]));

  const sortBy = useSearch.get("sortBy");
  const value = useSearch.get("value");

  console.log("sortBy", sortBy);
  console.log("value", value);
  console.log(year);
  console.log(month);

  return (
    <div>
      <h1>
        PostDetail - {year} - {month}
      </h1>
    </div>
  );
};

export default PostDetail;

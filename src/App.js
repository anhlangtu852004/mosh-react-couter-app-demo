import "./App.css";
import { Routes, Route } from "react-router-dom";

import Counters from "./components/counters";
import NavBar from "./components/NavBar";
import Videos from "./components/Videos";
import NavbarMosh from "./components/NavbarMosh";
import Home from "./components/pages/Home";
import Products from "./components/pages/Products";
import ProductDetail from "./components/pages/ProductDetail";
import Posts from "./components/pages/Posts";
import PostDetail from "./components/pages/PostDetail";
import Admin from "./components/pages/Admin";

function App() {
  return (
    <main className="container">
      {/* <NavBar />
      <Counters /> */}
      {/* <Videos /> */}
      <NavbarMosh />
      <div className="content">
        <Routes>
          <Route path="products/:id" element={<ProductDetail />} />
          <Route
            path="products"
            element={<Products sortBy={"sort"} />}
            // render={(props) => <Products sortBy={"sort"} {...props} />}
          />

          {/* <Route path="/posts/:year/:month?" element={<PostDetail />} /> */}
          <Route path="posts" element={<Posts />}>
            <Route path=":year/:month" element={<PostDetail />} />
            <Route path=":year" element={<PostDetail />} />
          </Route>
          <Route path="/admin" element={<Admin />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </main>
  );
}

export default App;

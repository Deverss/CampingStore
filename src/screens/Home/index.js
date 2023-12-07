import React from "react";
import Main from "./Main";
import Categories from "./Categories";
import Products from "./Products";
import About from "./About";
import Blog from "./Blog";

function Home() {
  return (
    <>
      <Main />
      <Categories />
      <Products />
      <About />
      <Blog />
    </>
  );
}

export default Home;

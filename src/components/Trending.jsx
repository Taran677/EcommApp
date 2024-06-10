import React, { useState } from "react";
import Products from "./Products";
import css from "./Trending.module.css";
function Trending({setProducts, products ,explore }) {
  return (
    <>
      <hr style={{ marginTop: "3vh" }} />
      <h2 className="display-1">Trending Now!</h2>
      <Products viewNav={explore} products={products} setProducts={setProducts} range={5}></Products>;
    </>
  );
}
export default Trending;

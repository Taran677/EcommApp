import React, { useState } from "react";
import Products from "./Products";
import css from "./Trending.module.css";
function Trending({
  setProducts,
  products,
  explore,
  count,
  setCount,
  setCart,
  setProductsInCart,
  productsInCart,
})

{
  return (
    <>
      <hr style={{ marginTop: "3vh" }} />
      <h2 className="display-1">Trending Now!</h2>
      <div className="container row">
        {" "}
        <Products
          products={products}
          range={5}
        ></Products>
        
      </div>
    </>
  );
}
export default Trending;

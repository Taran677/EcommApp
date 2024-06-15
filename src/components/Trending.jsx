import React, { useState } from "react";
import Products from "./Products";
import css from "./Trending.module.css";
function Trending({
  products,
  setCartCount
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
          setCartCount={setCartCount}
        ></Products>
        
      </div>
    </>
  );
}
export default Trending;

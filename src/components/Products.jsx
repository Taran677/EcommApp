import React from "react";
import CardProduct from "./Subcomponents/CardProduct";

function Products({ products, range}) {
  return (
    <>
      {Object.entries(products).slice(0, range).map(([key, product]) => (
        <CardProduct key={key} product={product} />
      ))}
    </>
  );
}

export default Products;

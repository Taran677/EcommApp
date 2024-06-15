import React, { useEffect, useState } from "react";
import CardProduct from "./Subcomponents/CardProduct";

function Products({ products, range, setCartCount }) {
  const [counts, setCounts] = useState([]);
  const [cart, setCart] = useState([]);
  const [productsInCart, setProductsInCart] = useState([]);
  // console.log(productsInCart)
  // Initialize counts based on the range
  setCartCount(productsInCart.length)
  useEffect(() => {
    setCounts(products.slice(0, range).map(() => 0));
  }, [products, range]);

 

  const handleSetCount = (index, newCount) => {
    setCounts((prevCounts) => {
      const newCounts = [...prevCounts];
      newCounts[index] = newCount;
      return newCounts;
    });
  };

  return (
    <>
      {products.slice(0, range).map((product, index) => (
        <CardProduct
          key={product.id}
          id={index}
          product={product}
          count={counts[index]}
          setCount={(newCount) => handleSetCount(index, newCount)}
          setCart={setCart}
          productsInCart={productsInCart}
          setProductsInCart={setProductsInCart}
        />
      ))}
    </>
  );
}

export default Products;

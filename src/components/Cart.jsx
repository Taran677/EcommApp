import React, { useEffect, useState } from "react";
import CardProduct from "./Subcomponents/CardProduct";
import BuyProduct from "./Subcomponents/BuyProduct";
import Bill from "./Subcomponents/Bill";
function Cart() {
  const [productsInCart, setProductsInCart] = useState([]);

  useEffect(() => {
    const storedProducts = localStorage.getItem("productsInCart");
    if (storedProducts) {
      setProductsInCart(JSON.parse(storedProducts));
    }
  }, []);

  return (
    <div className="container">
      <div className="row">
        {productsInCart.map((product, index) => (
          <BuyProduct
            key={product.id}
            id={index}
            product={product}
            count={product.quantity}
            setCount={() => {}}
            setCart={() => {}}
            productsInCart={productsInCart}
            setProductsInCart={setProductsInCart}
          />
        ))}
      </div>
      <Bill
        productsInCart={productsInCart}
        setProductsInCart={setProductsInCart}
      ></Bill>
    </div>
  );
}

export default Cart;

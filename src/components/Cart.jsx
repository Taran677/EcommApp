import React, { useEffect, useState } from "react";
import BuyProduct from "./Subcomponents/BuyProduct";
import Bill from "./Subcomponents/Bill";

function Cart({ setCartCount }) {
  const [productsInCart, setProductsInCart] = useState([]);

  useEffect(() => {
    const storedProducts = localStorage.getItem("productsInCart");
    if (storedProducts) {
      setProductsInCart(JSON.parse(storedProducts));
    }
    // Update cart count when productsInCart changes
    setCartCount(productsInCart.length);
  }, [productsInCart, setCartCount]);

  const emptyCart = () => {
    setProductsInCart([]);
    localStorage.setItem("productsInCart", JSON.stringify([]));
    // Update cart count when cart is emptied
    setCartCount(0);
  };

  return (
    <div className="container">
      <h2>Shopping Cart</h2>
      <button className="btn btn-outline-secondary mtc" onClick={emptyCart}>
        Empty Cart
      </button>
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
      <Bill productsInCart={productsInCart} setProductsInCart={setProductsInCart} />
    </div>
  );
}

export default Cart;

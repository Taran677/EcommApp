import React from "react";
import css from "./CardProduct.module.css";
import ProductCounter from "./ProductCounter";

function CardProduct({
  product,
  count,
  setCount,
  id,
  setCart,
  productsInCart,
  setProductsInCart,
}) {
  const handleCountChange = (newCount) => {
    setCount(newCount);
    setCart((prevCart) => {
      const updatedCart = prevCart.map((p) =>
        p.id === product.id ? { ...p, quantity: newCount } : p
      );
      return updatedCart;
    });
  };

  const handleBuyClick = () => {
    const storedProductsInCart = localStorage.getItem("productsInCart");
    const updatedProductsInCart = storedProductsInCart
      ? JSON.parse(storedProductsInCart)
      : [];
    const productIndex = updatedProductsInCart.findIndex(
      (p) => p.id === product.id
    );

    if (productIndex !== -1) {
      // Update quantity if product is already in cart
      updatedProductsInCart[productIndex].quantity = count;
    } else {
      // Add new product to cart with quantity
      updatedProductsInCart.push({
        ...product,
        quantity: count > 0 ? count : 1, // Adjust quantity as needed, assuming minimum 1 if count is 0
      });
    }

    setProductsInCart(updatedProductsInCart);
    localStorage.setItem(
      "productsInCart",
      JSON.stringify(updatedProductsInCart)
    );
  };

  return (
    <div
      className="card col-md-4 my-1 mx-1 justify-self-center"
      style={{ width: "18rem" }}
    >
      <img src={product.image} className="card-img-top" alt="img-product" />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.description}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Price: {product.price}</li>
        <li className="list-group-item">Category: {product.category}</li>
        <li className="list-group-item">{`Rating: ${product.rating.rate}  (${product.rating.count} reviews)`}</li>
      </ul>
      <div className="card-body-1 my-2">
        <button
          className="card-link btn btn-outline-primary"
          onClick={handleBuyClick}
        >
          Buy
        </button>
        <a href="#" className="card-link btn btn-outline-primary">
          <span
            onClick={handleBuyClick}
            className={`material-symbols-outlined ${css.cart}`}
          >
            shopping_cart
          </span>
        </a>
      </div>
      <div className="counter container row">
        <ProductCounter id={id} count={count} setCount={handleCountChange} />
      </div>
    </div>
  );
}

export default CardProduct;

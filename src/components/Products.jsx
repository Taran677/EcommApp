import React from "react";
import { useState } from "react";
import css from "./Products.module.css";

function ProductCard({ product }) {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div
      className="card mx-1 my-1 justify-content-around d-flex"
      style={{ width: "18rem" }}
    >
      <img src={product.image} className="card-img-top" alt={product.title} />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.description}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{`Category: ${product.category}`}</li>
        <li className="list-group-item">{`Price: $${product.price}`}</li>
        <li className="list-group-item">{`Rating: ${product.rating.rate} (${product.rating.count} reviews)`}</li>
      </ul>
      <div className="card-body card-body-1">
        <a href="#" className="card-link btn btn-outline-primary">
          Buy
        </a>
        <a href="#" className="card-link btn btn-outline-primary">
          <span style={{ wght: 200 }} className="material-symbols-outlined">
            shopping_cart
          </span>
        </a>
        <div className={css.counterContainer}>
          <button
            className={`btn btn-outline-primary ${css.counterBtn}`}
            onClick={decrementCount}
          >
            <span class="material-symbols-outlined">remove</span>
          </button>
          <span className={css.counterValue}>{count}</span>
          <button
            className={`btn btn-outline-primary ${css.counterBtn}`}
            onClick={incrementCount}
          >
            <span class="material-symbols-outlined">add</span>
          </button>
        </div>
      </div>
    </div>
  );
}

function Products({ products, range }) {
  return (
    <section className={` row container justify-content-center`}>
      {products.slice(0, range).map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </section>
  );
}

export default Products;

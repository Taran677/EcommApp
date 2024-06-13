import React from "react";
import ProductCounter from "./ProductCounter";
function BuyProduct({ product, count, setCount, id }) {
  return (
    <div className="card mx-2 my-2" style={{ width: "18rem" }}>
      <img className="card-img-top" src={product.image} alt="Card image cap" />
      <div className="card-body d-flex justify-content-between cardbdy">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.description}</p>
        <span className="container d-flex align-items-stretch justify -self-end ">
          <span className="  container row badge badge-secondary bg-secondary d-flex align-items-center mx-1 span-count">
            Quantity: {count}
          </span>

          <a href="#" className="btn btn-primary">
            Checkout
          </a>
        </span>
      </div>
    </div>
  );
}

export default BuyProduct;

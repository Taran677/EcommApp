import React, { useState } from "react";

function ProductCounter({count, setCount, id}) {
 

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="container my-3">
      <div className="card text-center">
        <div className="card-body">
          <h5 className="card-title">Set Quantity</h5>
          <p className="card-text">Count: {count}</p>
          <button className="btn btn-primary mx-1" onClick={increment}>
            +
          </button>
          <button
            className="btn btn-secondary mx-1"
            onClick={decrement}
            disabled={count === 0}
          >
            -
          </button>
          <button className="btn btn-outline-dark mx-1" onClick={reset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCounter;

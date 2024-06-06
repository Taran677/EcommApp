import { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./components/Navbar";
import About from "./components/About";
import CallAPI from "./components/CallAPI";
import Cards from "./components/Cards";

function App() {
  const [products, setProducts] = useState([]);

  return (
    <>
      <div className="mainelements">
        <Navbar />
        <About />
      </div>
      <Cards />
      <CallAPI setProducts={setProducts} />
      <section className={`trending row container justify-content-center`}>
        <h2 className="display-1">Trending Now!</h2>
      {products.slice(0, 5).map((product, index) => (
          <div key={index} className="card mx-1 my-1 justify-content-around d-flex" style={{ width: "18rem" }}>
            <img
              src={product.image}
              className="card-img-top"
              alt={product.title}
            />
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
                Buy Now!
              </a>
              <a href="#" className="card-link btn btn-outline-primary">
                Add to Cart
              </a>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

export default App;

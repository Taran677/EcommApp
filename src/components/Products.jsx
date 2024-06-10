import React, { useState, useEffect } from "react";
import css from "./Products.module.css";

function ProductCard({ product, updateProductQuantity }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Fetch count from localStorage if available
    const storedCount = localStorage.getItem(`product_${product.id}`);
    if (storedCount !== null) {
      setCount(parseInt(storedCount));
    }
  }, [product.id]);

  const addToCart = () => {
    const newCount = count;
    setCount(newCount);
    updateProductQuantity(product.id, newCount);

    // Fetch the products from localStorage
    // const storedProducts = JSON.parse(localStorage.getItem("products")) || [];

    // Update the product in storedProducts
    const updatedProducts = storedProducts.map((storedProduct) => {
      if (storedProduct.id === product.id) {
        // Update quantity and any other details here
        return { ...storedProduct, quantity: newCount };
      }
      return storedProduct;
    });

    // Update localStorage with the updated products
    localStorage.setItem("products", JSON.stringify(updatedProducts));
  };

  const decrementCount = () => {
    if (count > 0) {
      const newCount = count - 1;
      setCount(newCount);
      updateProductQuantity(product.id, newCount);
    }
  };

  const incrementCount = () => {
    const newCount = count + 1;
    setCount(newCount);
    updateProductQuantity(product.id, newCount);
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
        <button className="btn btn-outline-primary" onClick={addToCart}>
          Buy
        </button>
        <button className="btn btn-outline-primary" onClick={addToCart}>
          <span
            style={{ fontWeight: 200 }}
            className="material-symbols-outlined"
          >
            shopping_cart
          </span>
        </button>
        <div className={css.counterContainer}>
          <button
            className={`btn btn-outline-primary ${css.counterBtn}`}
            onClick={decrementCount}
          >
            <span className="material-symbols-outlined">remove</span>
          </button>
          <span className={css.counterValue}>{count}</span>
          <button
            className={`btn btn-outline-primary ${css.counterBtn}`}
            onClick={incrementCount}
          >
            <span className="material-symbols-outlined">add</span>
          </button>
        </div>
      </div>
    </div>
  );
}

function Products({ setProducts, products, range, viewNav }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({});
  const [sortOrder, setSortOrder] = useState("default");
  const [sortCriteria, setSortCriteria] = useState([]);
  const categories = [
    ...new Set(products.map((product) => product.category)),
  ].map((category) => capitalize(category)); // Extracting unique categories and capitalizing them
  const [storedProducts, setStoredProducts] = useState([]);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setStoredProducts(storedProducts);
    // Update products state with stored products
    setProducts(storedProducts);
  }, [setProducts]);

  const updateProductQuantity = (productId, quantity) => {
    const updatedProducts = storedProducts.map((product) => {
      if (product.id === productId) {
        return { ...product, quantity: quantity };
      }
      return product;
    });

    // Update localStorage with the updated products
    localStorage.setItem("products", JSON.stringify(updatedProducts));

    // Update storedProducts state
    setStoredProducts(updatedProducts);
  };

  const filteredProducts = products
    .filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((product) => {
      if (filters.category) {
        return (
          product.category.toLowerCase() === filters.category.toLowerCase()
        );
      }
      return true;
    });

  const sortedProducts = filteredProducts.slice().sort((a, b) => {
    for (const criteria of sortCriteria) {
      if (criteria === "priceHighToLow") {
        if (a.price !== b.price) {
          return b.price - a.price;
        }
      } else if (criteria === "priceLowToHigh") {
        if (a.price !== b.price) {
          return a.price - b.price;
        }
      } else if (criteria === "ratingHighToLow") {
        if (a.rating.rate !== b.rating.rate) {
          return b.rating.rate - a.rating.rate;
        }
      } else if (criteria === "ratingLowToHigh") {
        if (a.rating.rate !== b.rating.rate) {
          return a.rating.rate - b.rating.rate;
        }
      }
    }
    return 0;
  });

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleSortChange = (event) => {
    const value = event.target.value;
    setSortOrder(value);

    // Update sort criteria based on selected options
    let newSortCriteria = sortCriteria.filter(
      (criteria) => !criteria.includes(value)
    );
    if (value !== "default") {
      newSortCriteria = [value, ...newSortCriteria];
    }
    setSortCriteria(newSortCriteria);
  };

  const handleCategoryChange = (event) => {
    const value = event.target.value;
    setFilters({ ...filters, category: value });
  };

  const handleFilterSubmit = (event) => {
    event.preventDefault(); // Prevent form submission
    // Apply filter logic here, or filter automatically when filters change
  };

  return (
    <div>
      {viewNav === true && (
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <form className="d-flex" onSubmit={handleFilterSubmit}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
            <select
              className="btn btn-outline-primary ms-2"
              onChange={handleSortChange}
            >
              <option value="default">Sort</option>
              <option value="priceHighToLow">Price: High to Low</option>
              <option value="priceLowToHigh">Price: Low to High</option>
              <option value="ratingHighToLow">Rating: High to Low</option>
              <option value="ratingLowToHigh">Rating: Low to High</option>
            </select>
            <select
              className="btn btn-outline-primary ms-2"
              onChange={handleCategoryChange}
            >
              <option value="">All Categories</option>
              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <button
              className="btn btn-outline-primary ms-2"
              onClick={handleFilterSubmit}
            >
              Filter
            </button>
          </div>
        </nav>
      )}
      <section className={`row container justify-content-center`}>
        {sortedProducts.slice(0, range).map((product, index) => (
          <ProductCard
            key={index}
            product={product}
            updateProductQuantity={updateProductQuantity}
          />
        ))}
      </section>
    </div>
  );
}

export default Products;

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

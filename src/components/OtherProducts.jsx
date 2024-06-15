import React, { useState, useEffect } from "react";
import Products from "./Products";

function OtherProducts({ products, explore, setCartCount}) {
  const [selectedSortOption, setSelectedSortOption] = useState("");
  const [selectedFilterOption, setSelectedFilterOption] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  const handleSortSelect = (e) => {
    setSelectedSortOption(e.target.value);
  };

  const handleFilterSelect = (e) => {
    setSelectedFilterOption(e.target.value);
  };

  const getSortedAndFilteredProducts = () => {
    let sortedProducts = [...products];

    // Apply filtering
    if (selectedFilterOption && selectedFilterOption !== "default") {
      sortedProducts = sortedProducts.filter(
        (product) =>
          product.category.toLowerCase() === selectedFilterOption.toLowerCase()
      );
    }

    // Apply sorting
    if (selectedSortOption === "Price: high-to-low") {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else if (selectedSortOption === "Price: low-to-high") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (selectedSortOption === "Rating: high-to-low") {
      sortedProducts.sort((a, b) => b.rating.rate - a.rating.rate);
    } else if (selectedSortOption === "Rating: low-to-high") {
      sortedProducts.sort((a, b) => a.rating.rate - b.rating.rate);
    }

    return sortedProducts;
  };

  const sortedAndFilteredProducts = getSortedAndFilteredProducts();

  return (
    <>
      <div className="container">
        <nav className="navbar my-5 bg-body-tertiary ">
          <div className="container-fluid d-flex justify-content-around">
            <form onSubmit={handleFormSubmit}>
              <label className="label me-2" htmlFor="sort">
                Sort by
              </label>
              <select
                onChange={handleSortSelect}
                className="form-select"
                name="sort"
                id="sort"
              >
                <option value="default">Sort by</option>
                <option value="Price: high-to-low">Price: high-to-low</option>
                <option value="Price: low-to-high">Price: low-to-high</option>
                <option value="Rating: high-to-low">Rating: high-to-low</option>
                <option value="Rating: low-to-high">Rating: low-to-high</option>
              </select>
            </form>
            <form onSubmit={handleFormSubmit}>
              <label className="label me-2" htmlFor="filter">
                Filter by Category
              </label>
              <select
                onChange={handleFilterSelect}
                className="form-select"
                name="filter"
                id="filter"
              >
                <option value="default">All Categories</option>
                <option value="Men's clothing">Men's clothing</option>
                <option value="Women's clothing">Women's clothing</option>
                <option value="Electronics">Electronics</option>
                <option value="Jewelery">Jewelery</option>
              </select>
            </form>
          </div>
        </nav>

        <div className="container">
          <div className="row w-100">
            <Products
              viewNav={explore}
              range={20}
              setCartCount={setCartCount}
              products={sortedAndFilteredProducts} // Pass sortedAndFilteredProducts instead of products
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default OtherProducts;

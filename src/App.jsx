import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./components/Navbar";
import About from "./components/About";
import CallAPI from "./components/CallAPI";
import Cards from "./components/Cards";
import Trending from "./components/Trending";
import OtherProducts from "./components/OtherProducts";
import AboutMe from "./components/AboutMe";
import Cart from "./components/Cart";
function App() {
  const [products, setProducts] = useState([]);
  const [explore, setExplore] = useState(false);
  console.log(explore);
  const [productsInCart, setProductsInCart] = useState([]);
  console.log(productsInCart);

  const [counts, setCounts] = useState([]);
  const [aboutMe, setAboutMe] = useState(false);
  const [cart, setCart] = useState(false);
  useEffect(() => {
    setCounts(products.map(() => 0));
  }, [products]);

  const setCount = (index, newCount) => {
    setCounts((prevCounts) => {
      const newCounts = [...prevCounts];
      newCounts[index] = newCount;
      return newCounts;
    });
  };

  return (
    <>
      <div className="mainelements">
        <Navbar
          setAboutMe={setAboutMe}
          setExplore={setExplore}
          setCart={setCart}
          productsInCart={productsInCart}
        />
        {!explore && !cart && !aboutMe && (
          <About setCart={setCart} setExplore={setExplore} />
        )}
      </div>
      {!explore && !cart && !aboutMe && <Cards />}
      {explore && !cart && !aboutMe && (
        <OtherProducts
          products={products}
          setProducts={setProducts}
          productsInCart={productsInCart}
          setProductsInCart={setProductsInCart}
          count={counts}
          setCount={setCount}
          explore={explore}
          setCart={setCart}
        />
      )}
      {!explore && !cart && !aboutMe && (
        <Trending
          explore={explore}
          products={products}
          setProducts={setProducts}
          count={counts}
          setCount={setCount}
          setCart={setCart}
          productsInCart={productsInCart}
          setProductsInCart={setProductsInCart}
        />
      )}
      {cart && !explore && !aboutMe && <Cart></Cart>}
      {aboutMe && !cart && !explore && <AboutMe></AboutMe>}

      <CallAPI setProducts={setProducts} />
    </>
  );
}

export default App;

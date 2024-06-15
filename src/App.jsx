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
import Contact from "./components/Contact";
function App() {
  const [products, setProducts] = useState([]);
  const [explore, setExplore] = useState(false);
  const [aboutMe, setAboutMe] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [contact, setContact] = useState(false);
  const [cart, setCart] = useState(false);

  return (
    <>
      <div className="mainelements">
        <Navbar
          setAboutMe={setAboutMe}
          setExplore={setExplore}
          setCart={setCart}
          setContact={setContact}
        />
        {!explore && !contact && !cart && !aboutMe && (
          <About setCart={setCart} setExplore={setExplore} />
        )}
      </div>
      {!explore && !contact && !cart && !aboutMe && <Cards />}
      {explore && !contact && !cart && !aboutMe && (
        <OtherProducts
          products={products}
          explore={explore}
          setCartCount={setCartCount}
        />
      )}
      {!explore && !contact && !cart && !aboutMe && (
        <Trending
          products={products}
          setCartCount={setCartCount}

        />
      )}
      {cart && !contact && !explore && !aboutMe && <Cart setCartCount={setCartCount}></Cart>}
      {aboutMe && !contact  && !cart && !explore && <AboutMe></AboutMe>}
      {!cart && contact && !explore && !aboutMe && <Contact></Contact>}
      <CallAPI setProducts={setProducts} />
    </>
  );
}

export default App;

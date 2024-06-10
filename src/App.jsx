import { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./components/Navbar";
import About from "./components/About";
import CallAPI from "./components/CallAPI";
import Cards from "./components/Cards";
import Trending from "./components/Trending";
import OtherProducts from "./components/OtherProducts"
function App() {
  const [products, setProducts] = useState([]);
  const [explore, setExplore] = useState(false);

  return (
    <>
      <div className="mainelements">
        <Navbar setExplore={setExplore} />
        {explore === false && <About />}
      </div>
      {explore === false && <Cards />}{explore === true && <OtherProducts products={products} setProducts={setProducts} explore={explore}></OtherProducts>} 
      {explore === false && <Trending explore={explore} products={products} setProducts={setProducts}></Trending>}
      
      <CallAPI setProducts={setProducts} />
    </>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Cards from "./components/Cards";
import CallAPI from "./components/CallAPI";

function App() {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);

  return (
    <>
      <div className="mainelements">
        <Navbar></Navbar>
        <About></About>
      </div>
      <Cards></Cards>
      <CallAPI setProducts={setProducts}></CallAPI>
    </>
  );
}

export default App;

import Products from "./Products";

function OtherProducts({setProducts, products, explore }) {
  return (
    <Products viewNav={explore} range={20} setProducts={setProducts} products={products}></Products>
  );
}
export default OtherProducts;

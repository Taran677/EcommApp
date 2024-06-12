import css from "./CardProduct.module.css"

function CardProduct ({product}) {

    return  <div class="card col-md-4 my-1 mx-1" style={{"width": "18rem"}}>
    <img src={product.image} className="card-img-top" alt="img-product" />
    <div class="card-body">
      <h5 class="card-title">{product.title}</h5>
      <p class="card-text">
       {product.description}
      </p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Price: {product.price}</li>
      <li class="list-group-item">Category: {product.category}</li>
      <li class="list-group-item">{`Rating: ${product.rating.rate}  (${product.rating.count} reviews)`}</li>
    </ul>
    <div class="card-body-1 my-2">
      <a href="#" class="card-link btn btn-outline-primary">
        Buy
      </a>
      <a href="#" class="card-link btn btn-outline-primary">
        <span className={`material-symbols-outlined ${css.cart}`}>shopping_cart</span>
      </a>
    </div>
  </div>
}
export default CardProduct;
import React, { useState, useEffect } from 'react';

function Checkout() {
  const [total, setTotal] = useState(0);
  const [itemsInCart, setItemsInCart] = useState([]);

  useEffect(() => {
    // Fetch items from localStorage on component mount
    const storedItems = localStorage.getItem('productsInCart');
    if (storedItems) {
      setItemsInCart(JSON.parse(storedItems));
    }
  }, []);

  // Function to calculate total bill
  useEffect(() => {
    let sum = 0;
    itemsInCart.forEach(item => {
      sum += item.price * item.quantity;
    });
    setTotal(sum);
  }, [itemsInCart]);

  // Dummy function to simulate checkout action
  const handleCheckout = () => {
    alert(`Checkout Total: $${total.toFixed(2)}`);
    // Perform actual checkout logic here
  };

  return (
    <div className="container">
      <h2>Shopping Cart</h2>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Items in Cart</h5>
          <ul className="list-group">
            {itemsInCart.map((item, index) => (
              <li className="list-group-item" key={index}>
                {item.title} - ${item.price} x {item.quantity}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="card mt-3">
        <div className="card-body">
          <h5 className="card-title">Total: ${total.toFixed(2)}</h5>
          <button className="btn btn-primary" onClick={handleCheckout}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;

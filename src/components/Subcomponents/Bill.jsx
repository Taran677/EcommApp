import React, { useState, useEffect } from 'react';
import { Toast } from 'react-bootstrap';

function Bill() {
  const [total, setTotal] = useState(0);
  const [itemsInCart, setItemsInCart] = useState([]);
  const [showToast, setShowToast] = useState(false); // State to control toast visibility

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

  // Function to handle checkout action
  const handleCheckout = () => {
    setShowToast(true); // Show the toast when checkout is clicked
    // Perform any additional checkout logic here
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

      {/* Bootstrap Toast */}
      <Toast show={showToast} onClose={() => setShowToast(false)} delay={3000} autohide>
        <Toast.Header>
          <strong className="mr-auto">Checkout Successful</strong>
        </Toast.Header>
        <Toast.Body>
          Your total bill is ${total.toFixed(2)}. Thank you for shopping!
        </Toast.Body>
      </Toast>
    </div>
  );
}

export default Bill;

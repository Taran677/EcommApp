import React, { useState, useEffect } from 'react';
import { Toast } from 'react-bootstrap';

function Bill({ productsInCart, setProductsInCart }) {
  const [total, setTotal] = useState(0);
  const [showToast, setShowToast] = useState(false); // State to control toast visibility

  useEffect(() => {
    // Function to calculate total bill
    let sum = 0;
    productsInCart.forEach(item => {
      sum += item.price * item.quantity;
    });
    setTotal(sum);
  }, [productsInCart]);

  // Function to handle checkout action
  const handleCheckout = () => {
    setShowToast(true); // Show the toast when checkout is clicked
    // Perform any additional checkout logic here
  };

  // Function to handle removing an item from the cart
  const handleRemove = (id) => {
    const updatedCart = productsInCart.filter(item => item.id !== id);
    setProductsInCart(updatedCart);
    localStorage.setItem('productsInCart', JSON.stringify(updatedCart)); // Update localStorage
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Items in Cart</h5>
          <ul className="list-group">
            {productsInCart.map((item, index) => (
              <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
                <span>
                  {item.title} - ${item.price} x {item.quantity}
                </span>
                <button className="btn btn-outline-danger btn-sm" onClick={() => handleRemove(item.id)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="card mt-3 cardbottom">
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

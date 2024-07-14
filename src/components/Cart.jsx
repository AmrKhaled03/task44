import React, { useContext } from 'react';
import { ShoppingContext } from './ShoppingContext';
import '../App.css';

const Cart = () => {
  const { cart, removeFromCart } = useContext(ShoppingContext);

  return (
    <div className='cart my-5'>
      <div className='container'>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Price</th>
              <th>Img</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center">No Products in Cart</td>
              </tr>
            ) : (
              cart.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td><img src={item.img} alt={item.name} className="cart-img img-fluid w-25 h-25"  /></td>
                  <td>
                    <button className="btn btn-danger" onClick={() => removeFromCart(item.id)}>Delete</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;

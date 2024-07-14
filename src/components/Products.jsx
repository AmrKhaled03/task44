import React, { useContext, useEffect, useState } from 'react';
import Categories from './Categories';
import "../App.css";
import { ShoppingContext } from './ShoppingContext';

const Products = () => {
  const { menus ,addCart } = useContext(ShoppingContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(menus);
  }, [menus]);

  return (
    <div className='products flex-column'>
      <Categories />
      <div className='container'>
        <div className='row'>
          {products.map((product) => (
            <div className='col-lg-4 col-md-6 col-sm-12' key={product.id}>
              <div className='product d-flex flex-column justify-content-center align-items-center'>
              <img src={product.img}  alt={product.name} loading='lazy' className='img-fluid'/>
                <h1>{product.name}</h1>
                <span>{product.price}.00$</span>
                <small>{product.category}</small>
                <button className='btn btn-sm btn-success' onClick={()=>addCart(product)}>
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;

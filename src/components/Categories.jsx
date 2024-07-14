import React, { useContext } from 'react';
import '../App.css';
import { ShoppingContext } from './ShoppingContext';

const Categories = () => {
  const { filterCategory } = useContext(ShoppingContext);

  return (
    <div className='categories'>
      <div className='container'>
        <button className='category btn btn-md btn-warning' onClick={() => filterCategory('All')}>
          All
        </button>
        <button className='category btn btn-md btn-warning' onClick={() => filterCategory('Breakfast')}>
          Breakfast
        </button>
        <button className='category btn btn-md btn-warning' onClick={() => filterCategory('Lunch')}>
          Lunch
        </button>
        <button className='category btn btn-md btn-warning' onClick={() => filterCategory('Dinner')}>
          Dinner
        </button>
      </div>
    </div>
  );
};

export default Categories;

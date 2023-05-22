import { useState } from 'react';
import './AddProduct.css';

export default function AddProduct({
  addCategory,
  setAddCategory,
  addName,
  setAddName,
  addPrice,
  setAddPrice,
  addStock,
  setAddStock,
}) {
  console.log(addStock);
  return (
    <div className="addProduct">
      <h3>Add New Product</h3>
      <form>
        <label htmlFor="addCategory">
          <input
            type="text"
            name=""
            id="addCategory"
            value={addCategory}
            onChange={(e) => setAddCategory(e.target.value)}
          />{' '}
          Category
        </label>
        <label htmlFor="addName">
          <input
            type="text"
            name=""
            id="addName"
            value={addName}
            onChange={(e) => setAddName(e.target.value)}
          />{' '}
          Name
        </label>
        <label htmlFor="addPrice">
          <input
            type="number"
            name=""
            id="addPrice"
            value={addPrice}
            onChange={(e) => setAddPrice(e.target.value)}
          />{' '}
          Price
        </label>
        <label htmlFor="addStocked">
          <input
            type="checkbox"
            name=""
            id="addStocked"
            value={''}
            onChange={() => setAddStock(!addStock)}
          />{' '}
          In stock
        </label>
      </form>
    </div>
  );
}

import { useState } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';
import AddProduct from './AddProduct';
import data from '../data/data';

import './App.css';

function App() {
  const [showProductsOnStock, setShowProductsOnStock] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [addCategory, setAddCategory] = useState('');
  const [addName, setAddName] = useState('');
  const [addPrice, setAddPrice] = useState('');
  const [addStock, setAddStock] = useState('');
  let filterData = data.filter((product) => {
    if (showProductsOnStock) {
      return product.stocked;
    } else {
      return true;
    }
  });

  if (searchText !== '') {
    filterData = filterData.filter((product) => {
      if (product.name.toLowerCase().includes(searchText.toLowerCase())) {
        return product;
      } else {
        return false;
      }
    });
  }

  const categories = filterData.map((item) => item.category);
  const uniqueCategories = [...new Set(categories)];
  const products = uniqueCategories.map((category) => {
    return {
      category,
      products: filterData.filter((product) => product.category === category),
    };
  });
  const createNewProduct = () => {
    const newProdukt = {
      key: addName,
      category: addCategory,
      price: `$${addPrice}`,
      stocked: addStock,
      name: addName,
    };
    data.push(newProdukt);
    setAddCategory('');
    setAddName('');
    setAddPrice('');
    setAddStock(false);
  };
  const deleteRow = (e) => {
    console.log('działa', e.target.parentNode);
    e.target.parentNode.remove();
  };
  return (
    <>
      <div className="App">
        <SearchBar
          showProductsOnStock={showProductsOnStock}
          setShowProductsOnStock={setShowProductsOnStock}
          setSearchText={setSearchText}
        />
        <ProductTable />
        {products.map((product) => (
          <>
            <ProductCategoryRow
              key={product.category}
              category={product.category}
            />
            {product.products.map((item) => (
              <ProductRow
                key={item.name}
                name={item.name}
                price={item.price}
                stocked={item.stocked}
                onButtonClick={deleteRow}
              />
            ))}
          </>
        ))}
      </div>
      <div className="addNewProduct">
        <AddProduct
          setAddCategory={setAddCategory}
          addCategory={addCategory}
          setAddName={setAddName}
          addName={addName}
          setAddPrice={setAddPrice}
          addPrice={addPrice}
          addStock={addStock}
          setAddStock={setAddStock}
        />
        <button className="addButton" onClick={createNewProduct}>
          {' '}
          Add
        </button>
      </div>
    </>
  );
}

export default App;

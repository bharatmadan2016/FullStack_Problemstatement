import { useState } from 'react';
import ProductSearch from './components/ProductSearch';
import ProductFilter from './components/ProductFilter';
import ProductList from './components/productList';
import products from './data/data';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');

  
  const categories = Array.from(new Set(products.map((p) => p.category)));

  
  const filteredProducts = products.filter((p) => {
    const matchesName = p.name
      .toLowerCase()
      .includes(searchTerm.trim().toLowerCase());
    const matchesCategory = category === '' || p.category === category;
    return matchesName && matchesCategory;
  });

  return (
    <div className="app-container">
      <h1>Product Search</h1>
      <div className="controls">
        <ProductSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <ProductFilter
          category={category}
          setCategory={setCategory}
          categories={categories}
        />
      </div>
      <ProductList products={filteredProducts} />
    </div>
  );
}

export default App;

import React from "react";

const ProductFilter = ({ category, setCategory, categories }) => {
  return (
    <select
      value={category}
      onChange={(e) => setCategory(e.target.value)}
      className="category-filter"
    >
      <option value="">All Categories</option>
      {categories.map((cat) => (
        <option key={cat} value={cat}>
          {cat}
        </option>
      ))}
    </select>
  );
};

export default ProductFilter;
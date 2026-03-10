import React from "react";

const ProductList = ({ products }) => {
  if (products.length === 0) return <p>No products found.</p>;

  return (
    <ul className="product-list">
      {products.map((product) => {
        const imageUrl = new URL(`../assets/${product.image}`, import.meta.url).href;
        return (
          <li key={product.id} className="product-item">
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>Category: {product.category}</p>
              <p>Price: ₹{product.price}</p>
            </div>
            <img
              src={imageUrl}
              alt={product.name}
              className="product-image"
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ProductList;
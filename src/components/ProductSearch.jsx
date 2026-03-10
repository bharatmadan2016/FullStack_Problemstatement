import React from 'react'

const ProductSearch = ({searchTerm , setSearchTerm}) => {
  return (
    <input 
        type = "text"
        placeholder = "Search products..."
        value = {searchTerm}
        onChange = {(e) => setSearchTerm(e.target.value)}
        className="search-box"
    />
  )
}

export default ProductSearch

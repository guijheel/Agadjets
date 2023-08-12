

import React, { useState } from 'react';
import './gridNew.css'; // Importez votre feuille de styles CSS

const Grid = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const handleHover = (productId) => {
    setHoveredProduct(productId);
  };

  const handleHoverOut = () => {
    setHoveredProduct(null);
  };

  const products = [
    { id: 1, name: 'Product 1', image1: 'https://m.media-amazon.com/images/I/61GVid5xwxL._AC_SL1000_.jpg', image2: 'https://m.media-amazon.com/images/I/514yzxoLpQL._AC_.jpg'},
    { id: 2, name: 'Product 2', image1: 'https://m.media-amazon.com/images/I/51jtgPSWqWL._AC_SL1000_.jpg', image2: 'https://m.media-amazon.com/images/I/514P3bmhw2S._AC_.jpg'},
    { id: 3, name: 'Product 3', image1: 'https://m.media-amazon.com/images/I/61GVid5xwxL._AC_SL1000_.jpg', image2: 'https://m.media-amazon.com/images/I/514yzxoLpQL._AC_.jpg'},
    { id: 4, name: 'Product 4', image1: 'https://m.media-amazon.com/images/I/51jtgPSWqWL._AC_SL1000_.jpg', image2: 'https://m.media-amazon.com/images/I/514P3bmhw2S._AC_.jpg'},
    { id: 1, name: 'Product 1', image1: 'https://m.media-amazon.com/images/I/61GVid5xwxL._AC_SL1000_.jpg', image2: 'https://m.media-amazon.com/images/I/514yzxoLpQL._AC_.jpg'},
    { id: 2, name: 'Product 2', image1: 'https://m.media-amazon.com/images/I/51jtgPSWqWL._AC_SL1000_.jpg', image2: 'https://m.media-amazon.com/images/I/514P3bmhw2S._AC_.jpg'},
    { id: 3, name: 'Product 3', image1: 'https://m.media-amazon.com/images/I/61GVid5xwxL._AC_SL1000_.jpg', image2: 'https://m.media-amazon.com/images/I/514yzxoLpQL._AC_.jpg'},
    { id: 4, name: 'Product 4', image1: 'https://m.media-amazon.com/images/I/51jtgPSWqWL._AC_SL1000_.jpg', image2: 'https://m.media-amazon.com/images/I/514P3bmhw2S._AC_.jpg'},
    // ... Ajoutez plus de produits ici
  ];

  return (
    <div className="container">
      <div className="products">
        {products.map((product) => (
          <div
            key={product.id}
            className="productCard"
            onMouseEnter={() => handleHover(product.id)}
            onMouseLeave={handleHoverOut}
          >
            <img
              src={hoveredProduct === product.id ? product.image2 : product.image1}
              className="productImage"
              alt={product.name}
            />
            <h2 className="productName">{product.name}</h2>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Grid;



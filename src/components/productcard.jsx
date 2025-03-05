import React from 'react';
import ViewProductButton from '../components/button';

const Productcard = () => {
  const productImage = 'https://via.placeholder.com/150';
  const productName = 'Sample Product';
  const productPrice = '$99.99';

  return (
    <div className="product-card">
      <img src={productImage} alt={productName} />
      <h2>{productName}</h2>
      <p>{productPrice}</p>
      <ViewProductButton />
    </div>
  );
};

export default Productcard;
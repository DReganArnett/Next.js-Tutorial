'use client';
import React, {useState, useEffect} from 'react';

const AddToCart = () => {
  const [productAdded, setProductAdded] = useState(false);

  const handleClick = () => {
    setProductAdded(true);
  }

  return (
    <div>
       <button className='btn btn-primary' onClick={handleClick}>Add to Cart</button>
      <div>
          {productAdded ? 
            <h2>Product added successfully!</h2>
          :
          null}
      </div>
       
    </div>
  )
}

export default AddToCart;
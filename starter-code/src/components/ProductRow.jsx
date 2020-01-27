
import React from 'react';

const ProductRow = props => {

  return (
    <div>
        <p><strong className={props.stocked ? '' : 'Red'}>{props.name}</strong> {props.price}</p>
    </div>
  );
};

export default ProductRow;
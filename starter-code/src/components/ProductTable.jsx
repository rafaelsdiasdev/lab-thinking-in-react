import React from 'react';
import ProductRow from './ProductRow.jsx'

const ProductTable = props => {

    const productsToRender = [...props.products.data]
        .filter((el) => el.name.toLowerCase().includes(props.filter.searchText.toLowerCase()) && 
        (props.filter.inStock ? el.stocked : true))

    return (
        <div>

            {productsToRender.map((el, idx) => (
                <ProductRow key={idx} name={el.name} price={el.price} stocked={el.stocked} />
            ))}

        </div>
    )
}

export default ProductTable
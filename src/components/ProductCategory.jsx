import React from 'react';
import ProductData from './ProductData';

const ProductCategory =()=>{
    const cat = [...new Set(ProductData.map((elem)=>elem.category))];

    return(
        <>
        <div className='category'>
            {
                cat.map((elem,id)=>{
                    return(
                        <div key={id}>
                        <div className='cat'><p>{elem}</p>
                        </div>                       
                        </div>
                    )
                })
            }
            </div>
        </>
    );
}
export default ProductCategory;
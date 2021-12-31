import React from "react";
const Card = (props)=>{
    return(
        
        <>
            <div className='product' key={props.id}>
            <div className='card_img'>
            <img src={props.image} alt='product_img'/>
            </div>
            <div className='prod_inline'>
            <h3>{props.title}<br/><span className="show_cat">{props.category}</span></h3>
            <h4>{props.price}</h4>  
            </div>
            <div className='description'>
            <p>{props.description}</p>
            </div>
            <div className='rating'>
            <h2>&#9734;{props.rate}({props.count})</h2>
            <button type="button" className="btn btn-outline-primary btn-sm">Add to Cart</button>
            </div>
            </div>
        </>
    );
}
export default Card;
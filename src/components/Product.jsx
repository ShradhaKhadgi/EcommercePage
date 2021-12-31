import React, { useState } from 'react';
import ProductData from './ProductData';
import Card from './Card';

const Product =()=>{
    const [items, setItems] = useState(ProductData);
    const filterData = ()=>{
        const val=document.querySelector('#inputSelect').value;
        const updatedItems = ProductData.filter((elem)=>{
            return elem.category===val;
        });
        if(val==="All"){
            setItems(ProductData);
        }
        else{
        setItems(updatedItems);
        }
    }
    const cat = [...new Set(ProductData.map((elem)=>elem.category))];   
    return(
        <>
        
        <div className="product_card">
        <div className="input-group">
        <select className="form-select" id="inputSelect">
        <option value="All">All</option>
        {
                    cat.map((elem,id)=>{
                        return(
                            <option value={elem} key={id}>{elem}</option>                  
                        )
                    })
                }
        </select>
        <button onClick={filterData} className="btn btn-outline-primary" type="button">Filter</button>
        </div>
        {
            items.map((elem)=>{
                return(
                    <Card
                        key={elem.id}
                        image={elem.image}
                        category={elem.category}
                        title={elem.title}
                        price={elem.price}
                        description={elem.description}
                        rate={elem.rating.rate}
                        count={elem.rating.count}
                    />     
                );
            })
        }
        </div>
        </>
    );
}
export default Product;
import React from 'react';

const AddProductCategory =()=>{
    return(
        <>
        <form className="row g-3 form_class">
        <h2>Add Product Category</h2>
        <div className="col-md-6">
            <label className="form-label">Category</label>
            <input type="text" className="form-control" id="inputCategory"/>
        </div>
        <div className="col-12">
            <button type="button" className="btn btn-primary">Add</button>
        </div>
        </form>
        </>
    );
}
export default AddProductCategory;
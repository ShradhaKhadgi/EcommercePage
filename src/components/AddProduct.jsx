import React from 'react';

const AddProduct =()=>{
    return(
        <>
        <form className="row g-3 form_class">
        <h2>Add Product</h2>
        <div className="col-md-6">
            <label className="form-label">Title</label>
            <input type="text" className="form-control" id="inputCategory"/>
        </div>
        <div className="col-md-6">
            <label className="form-label">Price</label>
            <input type="text" className="form-control" id="inputPrice"/>
        </div>
        <div className="col-md-6">
            <label className="form-label">Description</label>
            <input type="text" className="form-control" id="inputDescription"/>
        </div>
        <div className="col-md-6">
            <label className="form-label">Category</label>
            <input type="text" className="form-control" id="inputCategory"/>
        </div>
        <div className="col-md-6">
            <label className="form-label">Image</label>
            <input type="file" className="form-control" id="inputImage"/>
        </div>
        <div className="col-12">
            <button type="button" className="btn btn-primary">Add</button>
        </div>
        </form>
        </>
    );
}
export default AddProduct;
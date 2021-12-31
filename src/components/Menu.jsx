import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, NavLink } from 'react-router-dom';
import AddProduct from './AddProduct';
import AddProductCategory from './AddProductCategory';
import Dashboard from './Dashboard';
import Product from './Product';
import ProductCategory from './ProductCategory';

const Menu =()=>{
    return(
        <>
        <Router>
        <div className="menu">
        <ul>
        <li><NavLink exact activeClassName="active_class" to='/'>Dashboard</NavLink></li>
        <li><NavLink exact activeClassName="active_class" to='/product'>Product</NavLink></li>
        <li><NavLink exact activeClassName="active_class" to='/add-product'>Add product</NavLink></li>
        <li><NavLink exact activeClassName="active_class" to='/product-category'>Product Category</NavLink></li>
        <li><NavLink exact activeClassName="active_class" to='/add-product-category'>Add Product Category</NavLink></li>
        </ul>
        </div>
        
        <Switch>
            <Route exact path='/'><Dashboard/></Route>
            <Route exact path='/product'><Product/></Route>
            <Route exact path='/add-product'><AddProduct/></Route>
            <Route exact path='/product-category'><ProductCategory/></Route>
            <Route exact path='/add-product-category'><AddProductCategory/></Route>
            <Route path="*">
                <Redirect to="/"/>
            </Route>
        </Switch>
        </Router>
        </>
    );
}
export default Menu;
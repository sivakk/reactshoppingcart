import React, { Component } from "react";
import Productlist from '../features/productlist/';
import data from '../data/products.json';
const Homepage = props => {
  return (
    <div>
      <Productlist products={data.products}/>
    </div>
  );
};

export default Homepage;

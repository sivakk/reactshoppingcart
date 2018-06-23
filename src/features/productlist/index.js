import React, { Component } from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ProductListitem from './Productlistitem';
import {ADDTOCART} from '../../Actions/';
import {cartitemswithquanity} from './cart';



 const Productlist = (props) => {
  return (
    <div className='product-listing'>
      {
        props.products.map(product=>
          <ProductListitem
          product={product}
          addtocart={props.ADDTOCART}
          cart={cartitemswithquanity(props.cart)}
          />)



      }
      
    </div>
  )
}
function mapStateToProps({cart}) {
  return{cart}
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ADDTOCART},dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Productlist)

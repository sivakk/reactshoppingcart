import React, { Component } from "react";

const ProductListitem = props => {
  // console.log('cart',props.cart);
  // console.log('products',props.product);
  const thisitemIncart=props.cart.filter(item=>item.id===props.product.id)[0];
  console.log('item in cart',thisitemIncart);
  return <div className='product-list-item'>
    <h3>{props.product.name}</h3>
    
    <img
      height={100}
      title={props.product.name}
      src={`/products/${props.product.image}`}/>
    <div>{props.product.description}</div>
    <div>${props.product.price}</div>
    <div><button onClick={()=>props.addtocart(props.product)}>Add to Cart {
      (thisitemIncart && thisitemIncart.quanity) || 0
    }</button></div>
  </div>
};

export default ProductListitem;

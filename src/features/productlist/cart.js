import React, { Component } from "react";
import {connect} from 'react-redux';


export const cartitemswithquanity=(cartitems)=>{
    return cartitems.reduce((acc,item) =>{
        const filtereditem=acc.filter(item2=>item2.id===item.id)[0]
        
        filtereditem !==undefined
        ? filtereditem.quanity++
        : acc.push({...item,quanity:1,})
       
        return acc

    },[])
}
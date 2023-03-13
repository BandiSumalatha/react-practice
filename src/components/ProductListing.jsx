import React, { useEffect } from 'react';
import axios from 'axios';
import {useDispatch, useSelector} from "react-redux"
import { setProducts } from '../store/ProductReducer';
import ProductComponent from './ProductComponent';

const ProductListing = () => {
  const values=useSelector ((state)=>console.log(state.productReducer,"data"))
  const dispatch=useDispatch()
   
  console.log(values)
  const fetchProducts=async()=>{
    const response=await axios.get("https://fakestoreapi.com/products")
    .catch((err)=>console.log(err))
dispatch(setProducts(response.data))
  }
  useEffect(()=>{fetchProducts()},[])
  return (
    <div>
     <ProductComponent/>

      </div>
  )
}

export default ProductListing
import React,{useEffect} from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeSelectedProduct, selectedProduct } from '../store/ProductReducer';

const ProductDeatil = () => {
  const {productId}=useParams()
  const dispatch=useDispatch()
  const products=useSelector(state=>state.SelectedProductReducer.state)
  const {id,image,title,category,description,price}=products
  console.log(products.rating.count,"products")
  console.log(productId)

const fetchProductDetails=async()=>{
const response=await axios.get(`https://fakestoreapi.com/products/${productId}`)
  .catch((err)=>err.message)
  dispatch(selectedProduct(response.data))
}

useEffect(()=>{
  fetchProductDetails()
  return()=>{
    dispatch(removeSelectedProduct())
  }
  },[productId])
  return (
    <div>
      <div>
        <img src={image} />
      </div>
      <div>
        <h1>{title}</h1>
        <a>{price}</a>

      </div>
    </div>
  )
}

export default ProductDeatil
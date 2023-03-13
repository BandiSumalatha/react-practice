import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
const ProductComponent = () => {
    const products=useSelector((state)=>state.productReducer)
    console.log(products[0].title,"title")
    const renderList=products.map((product)=>{
        const {id,title,image,price,category}=product;
        return(
            <>
            <div>
         <NavLink to={`/product/${id}`}>

        <div className=' card' >
            <div className='img'>
                <img  src={image} alt={title}      />
            </div>
            <div className='content'>
                <div className='header'>{title}</div>
                <div className='meta price'>${price}</div>
                <div className='meta'>{category}</div>
                <div></div>
            </div>
        </div>
        </NavLink>
        </div>
            </>
        )
          })
  return (
    <div>
        <>{renderList}</>
    </div>
  )
}

export default ProductComponent
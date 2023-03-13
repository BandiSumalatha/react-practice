import { act } from "@testing-library/react"

const  SET_PRODUCTS="SET_PRODUCTS"
const  SELECTED_PRODUCT="SELECTED_PRODUCT"
 const   REMOVE_SELECTED_PRODUCT="REMOVE_SELECTED_PRODUCT"

export const setProducts=(products)=>({
    type:SET_PRODUCTS,
    payload:products
})


export const selectedProduct=(product)=>({
    type:SELECTED_PRODUCT,
    payload:product
})
export const removeSelectedProduct=()=>({
    type:REMOVE_SELECTED_PRODUCT,
    
})
const intialState={
    products:[]
}

export const productReducer=(state=intialState,action)=>{
    switch(action.type){
        case SET_PRODUCTS:
            return {
                
                products:[...state,action.payload]
            };
            default:
                return state;
    }
}


export const SelectedProductReducer=(state={},action)=>{
    switch(action.type){
        case SELECTED_PRODUCT:
            return{
                ...state,
                ...action.payload
            }
            case REMOVE_SELECTED_PRODUCT:
                return{}
           
            default:
                return state;
    }
}


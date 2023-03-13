


import { combineReducers } from "redux";
import { productReducer } from './ProductReducer';
import { SelectedProductReducer } from "./ProductReducer";

export const rootReducer=combineReducers({productReducer,SelectedProductReducer})
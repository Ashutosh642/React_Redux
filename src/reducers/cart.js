import {
    ADD_TO_CART,
    CHECKOUT_REQUEST,
    CHECKOUT_FAILURE
  } from '../constants/ActionTypes'
  
  const initialState = {
    addedIds: [],
    quantityById: {}
  }
  
  // Reducers for corresponding Actions
  
  export default cart
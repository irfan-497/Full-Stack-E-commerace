
export const CLEAR_CART = 'CLEAR_CART';

const initialState = {
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  if (action.type === 'ADD_TO_CART') {
    return {
      ...state,
      cartItems: [...state.cartItems, action.payload],
    };
  } else if (action.type === 'REMOVE_FROM_CART') {
    const itemIdToRemove = action.payload.id;
    console.log('Removing item:', action.payload.id);
    const updatedCartItems = state.cartItems.filter((item) => item.id !== itemIdToRemove);
    return {
      ...state,
      cartItems: updatedCartItems,
    };
  } else if (action.type === CLEAR_CART) {
    return {
      ...state,
      cartItems: [], 
    };
  } else {
    return state; 
  }
};

export default cartReducer;

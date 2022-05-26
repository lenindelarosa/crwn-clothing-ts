import { createAction } from "../../utils/reducer.utils";
import { CART_ACTION_TYPES } from "./cart.types";

export const setIsCartOpen = (bool) => 
    createAction(CART_ACTION_TYPES.TOOGLE_CART_OPEN, bool);

// const updateCartItemsReducer = (newCartItems) => {
//     const newCartTotal = newCartItems.reduce((accTotal, cartItem) => accTotal + (cartItem.quantity * cartItem.price), 0);

//     const newCartCount = newCartItems.reduce((total, cartItem)=> total + cartItem.quantity, 0);

//     return [...newCartItems, {
//         cartTotal: newCartTotal, 
//         cartCount: newCartCount }];
// };

const addCartItem = (cartItems, productToAdd) => {

    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    );
    
    if(existingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === productToAdd.id
            ? {...cartItem, quantity: cartItem.quantity +1 }
            : cartItem
        )};
        return [...cartItems, { ...productToAdd, quantity: 1 }];
        //createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
    };

const delCartItem = (cartItems, productToDelete) => {
    const isLastCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToDelete.id && cartItem.quantity===1
    );
    
    if(!isLastCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === productToDelete.id
            ? {...cartItem, quantity: cartItem.quantity -1 }
            : cartItem
        );
        } else {
            return cartItems.filter((item) => item.id !== productToDelete.id);
        }
    };
    
const removeCartItem = (cartItems, productToRemove) => {
    return cartItems.filter((item) => item.id !== productToRemove.id);
};
    
export const addItemToCart = (cartItems, productToAdd) => {
    const newCartItems= addCartItem(cartItems, productToAdd);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const delItemFromCart = (cartItems, productToDelete) => {
    const newCartItems= delCartItem(cartItems, productToDelete);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeItemFromCart = (cartItems, productToRemove) => {
    const newCartItems= removeCartItem(cartItems, productToRemove);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
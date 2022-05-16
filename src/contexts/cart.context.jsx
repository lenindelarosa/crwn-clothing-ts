import { createContext, useReducer } from "react";
import { createAction } from "../utils/reducer.utils";

const addCartItem = (cartItems, productToAdd) => {
    
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    );
    
    if(existingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === productToAdd.id
            ? {...cartItem, quantity: cartItem.quantity +1 }
            : cartItem
        );
    };

    return [...cartItems, {...productToAdd, quantity: 1}];
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

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    cartCount: 0,
    delItemFromCart: () => {},
    removeItemFromCart: () => {},
    cartTotal: 0

});

export const CART_ACTION_TYPES = {
    TOOGLE_CART_OPEN: 'TOOGLE_CART_OPEN',
    SET_CART_ITEMS: 'SET_CART_ITEMS',
    SET_CART_TOTAL: 'SET_CART_TOTAL',
    SET_CART_COUNT: 'SET_CART_COUNT'
};

const cartReducer = (state, action) => {
    const { type, payload } = action;

    switch(type) {
        case CART_ACTION_TYPES.TOOGLE_CART_OPEN:
            return {
                ...state,
                isCartOpen: payload
            };

        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                ...payload,
            };
        
        default:
            throw new Error(`Unhandled type ${type} in cartReducer`);
    }
};

const INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
    cartCount: 0,
    cartTotal: 0
}

export const CartProvider = ({ children }) => {

    const [ { isCartOpen, cartItems, cartCount, cartTotal }, dispatch ] = useReducer(cartReducer, INITIAL_STATE);

    const setIsCartOpen = (bool) => {
        dispatch(createAction(CART_ACTION_TYPES.TOOGLE_CART_OPEN, bool));
    };
    
    const updateCartItemsReducer = (newCartItems) => {
        const newCartTotal = newCartItems.reduce((accTotal, cartItem) => accTotal + (cartItem.quantity * cartItem.price), 0);

        const newCartCount = newCartItems.reduce((total, cartItem)=> total + cartItem.quantity, 0);

        dispatch(createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
                cartItems: newCartItems, 
                cartTotal: newCartTotal, 
                cartCount: newCartCount 
            }))
    };

    const addItemToCart = (productToAdd) => {
        const newCartItems= addCartItem(cartItems, productToAdd);
        updateCartItemsReducer(newCartItems);
    };

    const delItemFromCart = (productToDelete) => {
        const newCartItems= delCartItem(cartItems, productToDelete);
        updateCartItemsReducer(newCartItems);
    };

    const removeItemFromCart = (productToRemove) => {
        const newCartItems= removeCartItem(cartItems, productToRemove);
        updateCartItemsReducer(newCartItems);
    };

    const value = { isCartOpen, setIsCartOpen, addItemToCart, delItemFromCart, removeItemFromCart, cartItems, cartCount, cartTotal };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider> 
};
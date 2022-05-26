export const selectIsCartOpen = (state) => state.cart.isCartOpen;

export const selectCartCount = (state) => {
    return state.cart.cartItems.reduce((total, cartItem)=> total + cartItem.quantity, 0);
};

export const selectCartTotal = (state) => {
    return state.cart.cartItems.reduce((accTotal, cartItem) => accTotal + (cartItem.quantity * cartItem.price), 0);
};

export const selectCartItems = (state) => state.cart.cartItems;
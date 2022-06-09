import { CategoryItem } from "../categories/category.types";

export enum CART_ACTION_TYPES {
    TOOGLE_CART_OPEN= 'cart/TOOGLE_CART_OPEN',
    SET_CART_ITEMS= 'cart/SET_CART_ITEMS',
    CLEAR_CART_ITEMS= 'cart/CLEAR_CART_ITEMS'
};

export type CartItem = CategoryItem & {
    quantity: number;
};
import React,{useState,useReducer} from 'react';
import cartContext from './cart-context';

const defaultState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state,action) =>{
    if(action.type === "ADD"){
        const updatedTotalAmmount = state.totalAmount + +action.item.quantity * (+action.item.price);

        const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id);
        const existingCartItem = state.items[existingCartItemIndex];

        let updatedItems;

        if (existingCartItem) {
            const updatedItem = { ...existingCartItem, 
                quantity: +existingCartItem.quantity + (+action.item.quantity)
            }

            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }
        else {
            updatedItems = state.items.concat(action.item);
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmmount
        }
    }

    if(action.type === "REMOVE"){

    }
    return state;
}

function CartProvider(props) {
    const [cart,dispacth] = useReducer(cartReducer,defaultState);

    const addItemHandler = (item)=>{
        dispacth({type:"ADD",item:item});
    }

    const removeItemHandler = ()=>{

    }

    const cartState = {
        items: cart.items,
        totalAmount:cart.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    }

    return (
        <cartContext.Provider value={cartState} >
            {props.children}
        </cartContext.Provider>
    )
}

export default CartProvider
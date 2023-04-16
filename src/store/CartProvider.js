import React,{useState} from 'react';
import cartContext from './cart-context';

const defaultState = {
    items: [],
    // totalAmount: 0
}

function CartProvider(props) {
    const [cart,setCart] = useState(defaultState);

    const addItemHandler = (item)=>{
        console.log("added");
        setCart((prevState)=>({
            items:[...prevState.items,item]
        }));
        console.log(cart);
    }

    const removeItemHandler = ()=>{

    }

    const cartState = {
        items: cart.items,
        // totalAmount:cart.totalAmount,
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
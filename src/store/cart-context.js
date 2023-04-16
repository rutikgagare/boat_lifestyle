import { createContext } from "react";

const cartContext = createContext(
    {
        items: [],
        // totalAmount:0,
        addItem: () => { },
        removeItem: () => { }
    }
);

export default cartContext;
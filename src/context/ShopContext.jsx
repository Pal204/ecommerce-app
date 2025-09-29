import React, { useState } from "react";
import { createContext } from "react";
import { products } from "../assets/assets";

export const ShopConext = createContext();

const ShopContextProvider = (props) => {

    const currency = '$';
    const delivery_fee = 10;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);

    const value = {
        products, currency, delivery_fee,
        search, setSearch, showSearch, setShowSearch
    }

    return (
        <ShopConext.Provider value={value}>
            {props.children}
        </ShopConext.Provider>
    )
}

export default ShopContextProvider;
import React from 'react';
import { useState } from "react";
import Carcard from "./Carcard.js"
const Productlist = () => {
    return(
        <>
            <Carcard />
        </>
    );
}

const Search = ({value, Change}) => {
    return(
        <>
            <form>
                <input type="text" placeholder="Search" value={value} onChange={Change}/>
                <button type="submt">Search</button>
            </form>
        </>
    );
}

export function Product() {
    const [search, setSearch] = useState('');
    return(
        <>
            <Search value={search} Change={(e) => setSearch(e.target.value)} />
            <Productlist  />
        </>
    );
}

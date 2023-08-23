import React from 'react';
import { useState } from "react";
import cars from './car.js';
import Carcard from "./Carcard.js"
const Productlist = ( {search} ) => {

    let compareWordsByLetters = (search_word, item_word) => {
        const lowerWord1 = search_word.toLowerCase();
        const lowerWord2 = item_word.toLowerCase();
        
        const minLength = Math.min(lowerWord1.length, lowerWord2.length);
        
        if (lowerWord1 === '') {
            return true;
        }

        for (let i = 0; i < minLength; i++) {
          if (lowerWord1[i] !== lowerWord2[i]) {
            return false; 
          }
        }
      
        return true;
    }

    let carList = cars.map((item) => {
        let name = item.name
        return compareWordsByLetters(search,name) ? <div key={item.price} className='car-card'><Carcard car={item} /></div> : <span key={item.price}></span>;
    });
    
    return(
        <>
            <div className="flex-container">
                {carList}
            </div>
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
            <Productlist  search={search}/>
        </>
    );
}

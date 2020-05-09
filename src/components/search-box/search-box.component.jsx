import React from 'react';

import './search-box.style.css';

export const SearchBox = ({placeholder, handle}) => (
    <input 
        className="search"
        type="search" 
        placeholder={placeholder}
        onChange={handle}
    />
);
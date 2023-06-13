// React component files NEED to start with a capital letter!
// (i.e., Crystal.js, NOT crystal.js)
import React from 'react';

const Crystal = ({ name, color, powers }) => {
    // name="Amethyst";
    // color="Purple";
    // powers ="super powers";
    return (
        <li>
            <h2>{name}</h2>
            <p>{color}</p>
            <p>{powers}</p>
            <button>Charge Crystal</button>
        </li>
    );
}

export default Crystal;
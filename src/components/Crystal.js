// React component files NEED to start with a capital letter!
// (i.e., Crystal.js, NOT crystal.js)
// React should be imported in every file
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// useState (or other Hooks) must be used inside a React
// component (function)

const Crystal = ({ name, color, powers, id, charges, increaseCharge, removeCrystal }) => {
    // const [charge, setCharge] = React.useState(0) IS THE SAME AS const [charge, setCharge] = useState(0), but without importing useState separately above(just importing React)
    // const [charge, setCharge] = useState(0);
    return (
        <>
            <h2>{id}: {name}</h2>
            <p>{color}</p>
            <p>{powers}</p>
            <button onClick={() => increaseCharge(id)}>Charge Crystal</button>
            <p>Crystal charged {charges} times</p>
            <button onClick={() => removeCrystal(id)}>Remove Crystal</button>
        </>
    );
}
Crystal.propTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    powers: PropTypes.string.isRequired,
    charges: PropTypes.number.isRequired
};
export default Crystal;


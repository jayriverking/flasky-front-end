// React component files NEED to start with a capital letter!
// (i.e., Crystal.js, NOT crystal.js)
import React from 'react';
import PropTypes from 'prop-types';

const Crystal = ({ name, color, powers, id }) => {
    // name="Amethyst";
    // color="Purple";
    // powers ="super powers";
    return (
        <div>
            <h2>{name}</h2>
            <p>{id}</p>
            <p>{color}</p>
            <p>{powers}</p>
            <button>Charge Crystal</button>
        </div>
    );
}
Crystal.propTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    powers: PropTypes.string.isRequired
};
export default Crystal;


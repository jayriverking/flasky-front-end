// React component files NEED to start with a capital letter! 
// (i.e. CrystalList.js NOT crystalList.js)
import React from 'react';
import Crystal from './Crystal';



const CrystalList = ({ crystals, increaseCharge }) => {

    const crystalComponents = crystals.map(
        (crystal) => {
            return (
                <li key={crystal.id}>
                    <Crystal 
                    id={crystal.id} 
                    name={crystal.nameData} 
                    color={crystal.colorData} 
                    powers={crystal.powersData} 
                    charges={crystal.charges}
                    increaseCharge={increaseCharge}   
                    />
                    </li>
            );
        }
    )

    return (
        <section>
            <h2>~Crystal List~</h2>
            <ul>
                {crystalComponents}
            </ul>
        </section>
    );
}

export default CrystalList;
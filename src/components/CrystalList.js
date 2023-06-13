// React component files NEED to start with a capital letter! 
// (i.e. CrystalList.js NOT crystalList.js)
import React from 'react';
import Crystal from './Crystal';


const CrystalList = () => {
    const crystalData = [
        {
            nameData: "Amethyst",
            colorData: "Purple",
            powersData: "suuper powers"
    },
    {
        nameData: "Jade",
        colorData: "Green",
        powersData: "greeen powers"
    },
    {
        nameData: "Opal",
        colorData: "Rainbow",
        powersData: "rainbow powers"
    },
    {
        nameData: "Diamond",
        colorData: "transparent",
        powersData: "diamond powers"
    }
]
    const crystalComponents = crystalData.map(
        (crystal) => {
            return (
                <li><Crystal name={crystal.nameData} color={crystal.colorData} powers={crystal.powersData}   /></li>
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
// React component files NEED to start with a capital letter! 
// (i.e. CrystalList.js NOT crystalList.js)
import React from 'react';
import Crystal from './Crystal';


const CrystalList = () => {
    const crystalData = [
        {   id: 1,
            nameData: "Amethyst",
            colorData: "Purple",
            powersData: "suuper powers"
    },
    {   id: 2,
        nameData: "Jade",
        colorData: "Green",
        powersData: "greeen powers"
    },
    {   id: 3,
        nameData: "Opal",
        colorData: "Rainbow",
        powersData: "rainbow powers"
    },
    {   id: 4,
        nameData: "Diamond",
        colorData: "transparent",
        powersData: "diamond powers"
    },
    {   id: 5,
        nameData: "Bad Crystal",
        colorData: "no colors",
        powersData: "no powers"
    }
]
    const crystalComponents = crystalData.map(
        (crystal) => {
            return (
                <li key={crystal.id}><Crystal id={crystal.id} name={crystal.nameData} color={crystal.colorData} powers={crystal.powersData}   /></li>
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
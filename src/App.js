// import logo from './logo.svg';
import React from 'react'
import './App.css';
import CrystalList from './components/CrystalList';

// the data
const crystalData = [
  {   id: 1,
      nameData: "Amethyst",
      colorData: "Purple",
      powersData: "suuper powers",
      charges: 0
},
{   id: 2,
  nameData: "Jade",
  colorData: "Green",
  powersData: "greeen powers",
  charges: 0
},
{   id: 3,
  nameData: "Opal",
  colorData: "Rainbow",
  powersData: "rainbow powers",
  charges: 0
},
{   id: 4,
  nameData: "Diamond",
  colorData: "transparent",
  powersData: "diamond powers",
  charges: 0
},
{   id: 5,
  nameData: "Bad Crystal",
  colorData: "no colors",
  powersData: "no powers",
  charges: 0
}
]

// the TOTAL count(state) should be in the outermost container (=root ancestor = App) 
// because there is no way to pass UP state ('child > parent' is not possible)

function App() {
  const [crystals, setCrystals] = React.useState(crystalData);

  const increaseCharge = (id) => {
    // console.log('clicked!')
    setCrystals(prevCrystals => {
      const updatedCrystals = prevCrystals.map(crystal => {
        return crystal.id == id ? {...crystal, charges: crystal.charges + 1}: crystal
      })
      return updatedCrystals
    })
  }

  const removeCrystal = (id) => {
    setCrystals(prevCrystals => {
      const updatedCrystals = prevCrystals.filter(
        // for crystals that DON'T meet the below conditions, return those crystals
        crystal => crystal.id !== id
      )
      return updatedCrystals
    })
  }


  const totalCharges = () => {
    let total = 0;
    for (let crystal of crystals){
      total += crystal.charges
    }
    return total
  }

  return (
    // React always wants a PARENT element; make sure your elements are ALWAYS wrapped in a div (semantic html is better, i.e., main, i.e, header)
    <main className="App">
      <h1>The Crystal Cove</h1>
      <p>Total charges: {totalCharges()}</p>
      <CrystalList crystals={crystals} increaseCharge={increaseCharge} removeCrystal={removeCrystal}/>
    </main>
  );
}

export default App;

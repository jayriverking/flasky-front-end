// import logo from './logo.svg';
import './App.css';
import CrystalList from './components/CrystalList';

function App() {
  return (
    // React always wants a PARENT element; make sure your elements are ALWAYS wrapped in a div (semantic html is better, i.e., main, i.e, header)
    <main className="App">
      <h1>The Crystals</h1>
      <CrystalList />
    </main>
  );
}

export default App;

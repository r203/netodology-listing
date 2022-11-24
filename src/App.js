import './App.css';
import items from './data/etsy.json';
import Listing from './components/Listing';

function App() {
  return (
    <div className="App">
      <Listing items={items}/>
    </div>
  );
}

export default App;

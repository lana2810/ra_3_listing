import "./App.css";
import Listing from "./Listing";
import data from "./data/etsy.json";
function App() {
  return (
    <div className="item-list">
      <Listing items={data}></Listing>
    </div>
  );
}

export default App;

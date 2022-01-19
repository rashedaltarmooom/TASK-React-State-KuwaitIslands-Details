import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import IslandForm from "./Components/IslandForm";
import IslandList from "./Components/IslandList";
import islandsData from "./data/islands";

function App() {
  // the selected island
  const [islands, setIslands] = useState(islandsData);
  const [island, setIsland] = useState(islands[1]);

  const incrementVisitor = (island) => {
    island.visitors++;
    setIslands([...islands]);
    console.log(islands);
  };

  return (
    <div>
      <Header />

      <div className="homePage">
        <IslandList islands={islands} setIsland={setIsland} />
        <IslandForm incrementVisitor={incrementVisitor} island={island} />
      </div>
    </div>
  );
}

export default App;

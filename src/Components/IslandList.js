import { useState } from "react";
import Island from "./Island";

export default function IslandList({ setIsland, islands }) {
  // const { setIsland, islands } = props
  // const islands = props.islands
  // const setIslands = props.setIslands
  const [query, setQuery] = useState("");

  let islandsArray = islands
    .filter((island) => island.name.toLowerCase().includes(query.toLowerCase()))
    .map((island) => <Island island={island} setIsland={setIsland} />);
  return (
    <div>
      <input
        className="search"
        placeholder="Search for an island"
        onChange={(event) => setQuery(event.target.value)}
      />
      <div className="islandList">{islandsArray}</div>
    </div>
  );
}

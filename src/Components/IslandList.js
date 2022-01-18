import { useState } from 'react';
import islands from '../data/islands';
import Island from './Island';

export default function IslandList({ setIsland, visitors }) {
  const [query, setQuery] = useState('');

  let islandsArray = islands
    .filter((island) => island.name.includes(query))
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

import { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import IslandForm from './Components/IslandForm';
import IslandList from './Components/IslandList';

function App() {
  const [island, setIsland] = useState('');

  return (
    <div>
      <Header />

      <div className="homePage">
        <IslandList setIsland={setIsland} />
        <IslandForm island={island} />
      </div>
    </div>
  );
}

export default App;

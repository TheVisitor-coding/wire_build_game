"use client";

import { useState } from "react";
import { addPlayer } from "./lib/player";

function Home() {
  const [selectedScenario, setSelectedScenario] = useState(null);

  const handleScenarioSelect = async () => {
    addPlayer(selectedScenario);
  };

  return (
    <>
      <div>
        <h1>Choisissez votre scénario :</h1>
        <ul>
          <li>
            <button onClick={() => setSelectedScenario(1)}>Scénario1</button>
          </li>
          <li>
            <button onClick={() => setSelectedScenario(2)}>Scénario2</button>
          </li>
          {/* Ajoutez d'autres scénarios au besoin */}
        </ul>
        {selectedScenario && (
          <button onClick={handleScenarioSelect}>Commencer le scénario</button>
        )}
      </div>
    </>
  );
}
export default Home;

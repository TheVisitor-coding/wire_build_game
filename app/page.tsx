"use client";

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Home() {
  const [selectedScenario, setSelectedScenario] = useState<number | null>(null);

  const handleScenarioSelect = async () => {
    const uniqueId = uuidv4();
    await fetch(
      `/api/addPlayer?playerId=${uniqueId}&selectedScenario=${selectedScenario}`
    );
    window.location.href = `/${selectedScenario}?playerId=${uniqueId}`;
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

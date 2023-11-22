import { v4 as uuidv4 } from "uuid";


export function addPlayer(selectedScenario: any) {
    const uniqueId = uuidv4();
    const newPlayer = {
      id: uniqueId,
      scenario: selectedScenario,
      challenge: {
        challenge1: false,
        challenge2: false,
        challenge3: false,
        challenge4: false,
      },
    };

    // Stocker les données du joueur dans le localStorage
    localStorage.clear()
    const playerData = localStorage.getItem("playerData") || "[]";
    const parsedPlayerData = JSON.parse(playerData);
    const updatedPlayerData = [...parsedPlayerData, newPlayer];
    localStorage.setItem("playerData", JSON.stringify(updatedPlayerData));

    window.location.href = `/${selectedScenario}?playerId=${uniqueId}`;
  }

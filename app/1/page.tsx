"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { loadData } from "../lib/localStorage";

function Section1() {
  const searchParams = useSearchParams();
  const playerId = searchParams.get("playerId");
  const [playerData, setPlayerData] = useState({
    id: "",
    scenario: "",
    challenge: {
      challenge1: false,
      challenge2: false,
      challenge3: false,
      challenge4: false,
    },
  });
  useEffect(() => {
    loadData(playerId, setPlayerData);
  }, [playerId]);

  return (
    <>
      <h1>Section 1 Welcome</h1>
      <p>Player ID: {playerId}</p>
      {playerData && (
        <div>
          <h2>Données du joueur:</h2>
          <p>ID: {playerData.id}</p>
          <p>Scénario: {playerData.scenario}</p>
          <p>Challenges:</p>
          <ul>
            <li>
              Challenge 1:{" "}
              {playerData.challenge.challenge1 ? "Réussi" : "Non réussi"}
            </li>
            <li>
              Challenge 2:{" "}
              {playerData.challenge.challenge2 ? "Réussi" : "Non réussi"}
            </li>
            <li>
              Challenge 3:{" "}
              {playerData.challenge.challenge3 ? "Réussi" : "Non réussi"}
            </li>
            <li>
              Challenge 4:{" "}
              {playerData.challenge.challenge4 ? "Réussi" : "Non réussi"}
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Section1;

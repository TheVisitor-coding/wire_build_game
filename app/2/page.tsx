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

  function changeValue() {
    loadData(playerId, setPlayerData);
    playerData.challenge.challenge1 = true;
  }

  return (
    <>
      <button
      onClick={changeValue}
      >Change challenge 1 to true</button>
    </>
  );
}

export default Section1;

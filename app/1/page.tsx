"use client"

import { useSearchParams } from "next/navigation";

function Section1() {
  const searchParams = useSearchParams();
  const playerId = searchParams.get("playerId");


  return (
    <>
      <h1>Section 1 Welcome</h1>
      <p>Player ID: {playerId}</p>
    </>
  );
}

export default Section1;

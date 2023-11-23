"use client";

import { loadData } from "@/app/lib/localStorage";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import Lottie from "lottie-react";
import success from "@/public/sucess.json";
import { FaInfoCircle } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";

function Success() {
  const searchparams = useSearchParams();
  const section = searchparams.get("scenario");
  const playerId = searchparams.get("playerId");
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

  const text = [
    { id: "1", info_text: "o" },
    {
      id: "2",
      info_text:
        "In fact, the second button is more ergonomic because it's better sized. A simple rule of thumb for designing buttons is to double the size of the button height.",
    },
    { id: "3", info_text: "o" },
  ];

  const textInfo = text.filter((text) => text.id === section);

  useEffect(() => {
    loadData(playerId, setPlayerData);
    localStorage.clear();
  }, [playerId]);

  if (playerData) {
    const updatedPlayerData = {
      ...playerData,
      challenge: {
        ...playerData.challenge,
        [`challenge${section}`]: true,
      },
    };
    localStorage.setItem("playerData", JSON.stringify(updatedPlayerData));
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
        className="h-screen w-full text-black flex flex-col gap-5 justify-center items-center">
        <h2 className="font-kreon text-3xl text-center">
          Congrats !! You succeed the challenge {section}
        </h2>
        <Lottie animationData={success} className="w-1/2" />
        <div className="flex flex-col gap-2 w-11/12 bg-green-100 rounded-lg p-4 mb-4 text-sm text-green-700 justify-center items-top">
          <div className="flex flex-row items-center">
            <FaInfoCircle color="green" className="mr-2 w-8 h-8" />
            <span className="font-medium">Information </span>
          </div>
          <div className="">{textInfo[0].info_text}</div>
        </div>
        <button
          onClick={() => {
            window.location.href = `/waiting?playerId=${playerId}&&scenario=${section}`;
          }}
          className="py-4 px-14 bg-blue rounded-full flex flex-row items-center text-white text-lg gap-3"
        >
          <FaArrowRightLong />
        </button>
      </motion.div>
    </>
  );
}

export default Success;

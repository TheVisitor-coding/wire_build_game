"use client";

import { addPlayer } from "@/app/lib/player";
import Image from "next/image";
import { motion } from "framer-motion";

function Menu() {
  const handleScenarioSelect = async (scenario: number) => {
    addPlayer(scenario);
  };
  const btn_variant = {
    hover: {
      scale: 1.1,
      textShadow: "0px 0px 8px rgb(255,255,255)",
      transition: {
        duration: 0.3,
        yoyo: Infinity,
      },
    },
  };

  return (
    <>
      <motion.div
        className={`h-screen w-screen bg-bg-box bg-cover pt-14 flex items-center justify-center gap-14 flex-col`}
      >
        <Image src="/Logo_bleu.png" width={100} height={100} alt="logo" />

        <motion.div
          className="flex items-center flex-col">
          <h1 className="font-kreon text-3xl text-white font-bold">
            Choose your Character
          </h1>
          <div className="flex flex-col w-4/5 mt-14 gap-10">
            <motion.button
              whileHover={btn_variant.hover}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                handleScenarioSelect(1)
              }}
              className="bg-blue py-4 rounded-xl shadow-lg text-white"
            >
              Joseph The Musician
            </motion.button>
            <motion.button
              whileHover={btn_variant.hover}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                handleScenarioSelect(2)
              }}
              className="bg-blue py-4 rounded-xl shadow-lg text-white"
            >
              {" Script 2 (soon)"}
            </motion.button>
            <motion.button
              whileHover={btn_variant.hover}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                handleScenarioSelect(3)
              }}
              className="bg-blue py-4 rounded-xl shadow-lg text-white"
            >
              {" Script 3 (soon)"}
            </motion.button>
            <motion.button
              whileHover={btn_variant.hover}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                handleScenarioSelect(4)
              }}
              className="bg-blue py-4 rounded-xl shadow-lg text-white"
            >
              {" Script 4 (soon)"}
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}

export default Menu;

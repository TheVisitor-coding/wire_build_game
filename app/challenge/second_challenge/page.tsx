"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRightLong, FaArrowRotateLeft } from "react-icons/fa6";
import Lottie from "lottie-react";
import sad from "@/public/sad.json";
import { useSearchParams } from "next/navigation";

function ChallengeTwo() {
  const [isFailed, setIsFailed] = useState(false);
  const searchParams = useSearchParams();
  const playerId = searchParams.get("playerId");

  return (
    <>
      {!isFailed ? (
        <div className="h-screen w-full text-black flex items-center justify-center flex-col gap-14 overflow-hidden">
          <h2 className="font-bahaus text-3xl">Second Challenge</h2>
          <div className="flex items-center text-center flex-col">
            <h3 className="text-kreon text-xl">
              Which Button is better in terms of ergonomy ?
            </h3>
            <div className="flex flex-col items-center justify-around mt-10 gap-8">
              <motion.button
                onClick={() => setIsFailed(true)}
                className="py-8 px-14 bg-black rounded-lg flex flex-row items-center text-white text-lg gap-3"
              >
                Lire la suite <FaArrowRightLong />
              </motion.button>

              <motion.button
                onClick={() =>
                  (window.location.href = `/challenge/success?scenario=2&&playerId=${playerId}`)
                }
                className="py-4 px-14 bg-black rounded-full flex flex-row items-center text-white text-lg gap-3"
              >
                Lire la suite <FaArrowRightLong />
              </motion.button>

              <motion.button
                onClick={() => setIsFailed(true)}
                className="py-4 px-14 bg-red rounded-full flex flex-row items-center text-yellow-400 text-lg gap-3"
              >
                Lire la suite <FaArrowRightLong />
              </motion.button>

              <motion.button
                onClick={() => setIsFailed(true)}
                className="py-1 px-2 bg-black rounded-lg flex flex-row items-center text-white text-lg gap-3"
              >
                Lire la suite <FaArrowRightLong />
              </motion.button>
            </div>
          </div>
        </div>
      ) : (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1, transition: { duration: 0.5 } }}
          className="h-screen w-full text-black flex items-center justify-center flex-col gap-5"
        >
          <h2 className="text-2xl font-bahaus font-light">
            Oh nooo, you failed...
          </h2>
          <Lottie animationData={sad} />
          <p className="font-kreon text-xl text-center font-medium">
            You need to wait your turn before try again
          </p>
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1, transition: { duration: 0.5 } }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsFailed(false)}
            className="bg-blue py-4 px-10 rounded-xl shadow-lg text-white font-kreon font-bold"
          >
            <span className="flex flex-row gap-2 items-center">
              <p>Retry</p> <FaArrowRotateLeft />
            </span>
          </motion.button>
        </motion.div>
      )}
    </>
  );
}

export default ChallengeTwo;

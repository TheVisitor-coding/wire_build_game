"use client";

import Image from "next/image";
import { useState } from "react";
import { FaArrowRightLong, FaArrowRotateLeft } from "react-icons/fa6";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import sad from "@/public/sad.json";
import { useSearchParams } from "next/navigation";

function Section4() {
  const [choice, setChoice] = useState(0);
  const [isFailed, setIsFailed] = useState(false);
  const searchParams = useSearchParams();
  const playerId = searchParams.get("playerId");
  function verifyAnswer() {
    if (choice === 1) {
      window.location.href = `/winner?playerId=${playerId}`;
    } else {
      setIsFailed(true);
    }
  }

  return (
    <>
      {!isFailed ? (
        <div className="h-screen w-full  flex flex-col items-center justify-center gap-4 mt-4">
          <h2 className="text-black text-lg text-center p-5 font-kreon">
            When i press the register button, i want to go to the next page.
            What is good practice in Figma Prototype ?
          </h2>

          <Image src="/chall3.png" width={300} height={300} alt="img_chall3" />

          <div className="flex flex-col gap-2">
            <button
              onClick={() => setChoice(1)}
              className={`border-2 shadow-md rounded-xl font-medium text-md flex flex-col text-black p-2 ${choice === 1 ? "border-green-500" : "border-black"
                }`}
            >
              <p>Select the interactive zone for the connection</p>
              <p>Click to + create the connection</p>
              <p>Drag it to the destination</p>
            </button>

            <button
              onClick={() => setChoice(2)}
              className={`border-2 shadow-md rounded-xl font-medium text-md text-left flex flex-col text-black p-2 ${choice === 2 ? "border-green-500" : "border-black"
                }`}
            >
              <p>Open the Prototype tab in the right-hand sidebar</p>
              <p>Add interactions</p>
              <p>Define the details of the interaction</p>
            </button>
          </div>
          <button
            onClick={() => verifyAnswer()}
            className="py-4 px-14 bg-blue rounded-full flex flex-row items-center text-white text-lg gap-3"
          >
            <FaArrowRightLong />
          </button>
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

export default Section4;

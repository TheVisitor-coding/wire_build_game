"use client";

import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import { GrValidate } from "react-icons/gr";

function Challenge2() {
  const searchParams = useSearchParams();
  const playerId = searchParams.get("playerId");

  const [isTimeOut, setIsTimeOut] = useState(false);

  const [isClicked1, setIsClicked1] = useState(false);
  const [isClicked2, setIsClicked2] = useState(false);
  const [isClicked3, setIsClicked3] = useState(false);
  const [isClicked4, setIsClicked4] = useState(false);

  const [isFailed, setIsFailed] = useState(false);

  function validateBtn() {
    if (isClicked1 && isClicked3 && !isClicked2 && !isClicked4) {
      window.location.href = `/challenge/success?scenario=2&&playerId=${playerId}`;
    } else {
      setIsFailed(true);
    }
  }

  return (
    <>
      {!isTimeOut ? (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
          className="h-screen w-full flex flex-col  pt-6 justify-between items-center relative overflow-hidden"
        >
          <div className="flex flex-col items-center">
            <motion.span className="w-11/12 bg-grey rounded-md shadow-chat py-2 h-fit">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
                className="p-2 text-black font-kreon text-center"
              >
                {"Hey again! Ready for the next challenge? This time, we're diving into the header and footer wireframes."}
              </motion.p>
            </motion.span>

            <motion.span className="w-11/12 bg-grey rounded-md shadow-chat py-2 h-fit mt-8">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
                className="p-2 text-black font-kreon text-center"
              >
                {"I've got a specific vision in mind – a sleek search bar at the top for easy navigation, and don't forget a cool 'Featured Products' section at the bottom."}
              </motion.p>
            </motion.span>

            <motion.span className="w-11/12 bg-grey rounded-md shadow-chat py-2 h-fit mt-8">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
                className="p-2 text-black font-kreon text-center"
              >
                {"Can you do me this favor ?"}
              </motion.p>
            </motion.span>
          </div>

          <span className="w-full flex items-start justify-evenly">
            <Image
              src="/homme.svg"
              width={250}
              height={250}
              alt="man"
              className=""
            />
            <button
              onClick={() => setIsTimeOut(true)}
              className="p-4 rounded-full px-10 bg-blue shadow-md -translate-x-5"
            >
              <FaArrowRightLong color="white" />
            </button>
          </span>
        </motion.div>
      ) : (
        <div className="h-screen w-full flex  justify-center flex-col overflow-hidden p-2">
          <h2 className="text-center text-black text-xl mt-5">
            Guess the right combination by choosing the right header and footer
          </h2>

          <div className="h-1/3 w-full items-end flex flex-row justify-center overflow-x-hidden">
            <button
              onClick={() => setIsClicked1((prevIsClicked1) => !prevIsClicked1)}
            >
              <Image
                src={"/img_wireframe/GOOD1.png"}
                width={250}
                height={250}
                alt="good img"
                className={`${isClicked1 ? "border-2 border-green-600" : ""}`}
              />
            </button>
            <button
              onClick={() => setIsClicked2((prevIsClicked2) => !prevIsClicked2)}
            >
              <Image
                src={"/img_wireframe/FALSE1.png"}
                width={250}
                height={250}
                alt="good img"
                className={`${isClicked2 ? "border-2 border-green-600" : ""}`}
              />
            </button>
          </div>
          <div className="h-1/2 w-full items-center flex justify-center">
            <button
              onClick={() => setIsClicked3((prevIsClicked3) => !prevIsClicked3)}
            >
              <Image
                src={"/img_wireframe/GOOD2.png"}
                width={250}
                height={250}
                alt="good img"
                className={`${isClicked3 ? "border-2 border-green-600" : ""}`}
              />
            </button>
            <button
              onClick={() => setIsClicked4((prevIsClicked4) => !prevIsClicked4)}
            >
              <Image
                src={"/img_wireframe/FALSE2.png"}
                width={250}
                height={250}
                alt="good img"
                className={`${isClicked4 ? "border-2 border-green-600" : ""}`}
              />
            </button>
          </div>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
            className={`${isFailed ? "text-red-500" : "hidden"} text-center`}
          >You failed, wait your turn and try again</motion.h3>
          <button
            onClick={() => validateBtn()}
            className="px-4 py-6 rounded-xl bg-blue flex items-center justify-center gap-5 text-xl"
          >
            Validate <GrValidate />
          </button>
        </div>
      )}
    </>
  );
}

export default Challenge2;

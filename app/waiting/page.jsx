"use client";

import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";

function Waiting() {
  const searchParams = useSearchParams();
  const playerId = searchParams.get("playerId");
  const section = searchParams.get("scenario");

  const file = [
    "first_challenge",
    "second_challenge",
    "third_challenge",
    "final_challenge",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
      className="font-kreon flex flex-col h-screen items-center text-center text-black font-bold text-3xl justify-center gap-10 px-5"
    >
      <p>Wait Please !!</p>

      <p>
        You can&apos;t start the next step until you&apos;ve reached the next
        stage space. Don&apos;t cheat!
      </p>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
        whileTap={{ scale: 0.9 }}
        className="p-4 rounded-full px-10 bg-blue shadow-md"
        onClick={() => {
          window.location.href = `/challenge/${file[section]}?playerId=${playerId}`;
        }}
      >
        <FaArrowRightLong color="white" />
      </motion.button>
    </motion.div>
  );
}
export default Waiting;

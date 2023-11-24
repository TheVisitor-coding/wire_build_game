"use client";

import Lottie from "lottie-react";
import win from "@/public/win.json";
import firework from "@/public/firework.json";
import { motion } from "framer-motion";
function Winner() {
  return (
    <>
      <motion.div className="h-screen w-full flex bg-gradient-to-b from-[#61ABF0] to-[#86A0FF] items-center flex-col font-kreon justify-center gap-5 p-5 relative">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
          className="text-white text-3xl"
        >
          Congratulations !!
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
          className="text-white text-2xl text-center"
        >
          You win !
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
          className="text-white text-xl text-center"
        >
          {"You've won absolutely nothing except our congratulations !!"}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
          className="text-white text-xl text-center"
        >
          {"(Joseph thanks you a little)"}
        </motion.p>
        <Lottie animationData={win} className="w-3/4" />
        <Lottie animationData={firework} className="w-3/4 absolute bottom-0" />
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => window.location.href = "/"}
          initial={{ scale: 0 }}
          animate={{ scale: 1, transition: { duration: 0.5 } }}
          className="bg-white py-4 px-14 rounded-xl shadow-lg text-black font-kreon mt-5 font-bold z-10"
        >
          <p>Replay</p>
        </motion.button>
      </motion.div>
    </>
  );
}

export default Winner;

"use client"

import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";

function Waiting() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
      className="font-kreon flex flex-col h-screen items-center text-center text-black font-bold text-3xl justify-center gap-10 px-5">
      <p>Wait Please !!</p>

      <p>
        You can&apos;t start the next step until you&apos;ve reached the next end-of-section square. Don&apos;t cheat!
      </p>


      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
        whileTap={{ scale: 0.9 }}
        className="p-4 rounded-full px-10 bg-blue shadow-md"><FaArrowRightLong color="white" /></motion.button>
    </motion.div>
  )
}
export default Waiting;
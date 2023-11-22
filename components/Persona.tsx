import Image from "next/image";
import ChatBubble from "./chatBubble";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

function Persona() {

  const [showText1, setShowText1] = useState(false);
  const [showText2, setShowText2] = useState(false);

  useEffect(() => {
    const timeout1 = setTimeout(() => {
      setShowText1(true);
    }, 2000);

    const timeout2 = setTimeout(() => {
      setShowText2(true);
    }, 5000);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, []);

  return (
    <>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
        className="h-screen flex items-center flex-col gap-5 overflow-hidden">

        {
          showText1 && (
            <motion.span
              className="w-11/12 bg-grey rounded-md shadow-chat py-4 h-fit mt-8 ">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
                className="p-2 text-black font-kreon">Hope you're good! 🌟 I'm [Your Name], the crafty soul into [briefly describe your craft]. Need your awesome skills for a cool app idea I've got. 😎</motion.p>
            </motion.span>
          )
        }



        {
          showText2 && (
            <motion.span
              className=" w-11/12 h-fit py-4 bg-grey rounded-md shadow-chat mt-8">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
                className="p-2 text-black font-kreon font-medium"> I'm all about [describe your artisanal skills], but the tech side is like... 🤯. Can you help me whip up a rad prototype? 🚀
                Holler back if you're up for it! 🙌</motion.p>
            </motion.span>
          )
        }


        <div className="fixed bottom-0 flex flex-row items-top pt-24 -translate-x-14">
          <Image src={"/homme.svg"} width={250} height={250} alt="man" className="" />
          <div className="">
            {
              !(showText1 && showText2) ? (
                <ChatBubble />
              ) : (
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => { window.location.href = "/waiting" }}
                  className="p-4 rounded-full px-10 bg-blue shadow-md"><FaArrowRightLong /></motion.button>
              )
            }
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Persona;

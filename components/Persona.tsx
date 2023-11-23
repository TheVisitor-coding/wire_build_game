import Image from "next/image";
import ChatBubble from "./chatBubble";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

function Persona(playerId: any) {

  const [showText1, setShowText1] = useState(false);
  const [showText2, setShowText2] = useState(false);
  const idUnique = playerId.playerId;

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
              className="w-11/12 bg-grey rounded-md shadow-chat py-4 h-fit mt-4"
            >
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
                className="p-2 text-black font-kreon"
              >
                {"Hey there! I'm Joseph, a music enthusiast with a dream. I want to create a music e-commerce app where people can order their favorite vinyl and CDs. The thing is, I'm a musician, not a web developer."}
              </motion.p>
            </motion.span>
          )
        }

        {
          showText2 && (
            <motion.span
              className="w-11/12 h-fit py-4 bg-grey rounded-md shadow-chat mt-8"
            >
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
                className="p-2 text-black font-kreon font-medium"
              >
                {"I need your help to design the app's structure, something sleek and efficient. Ready to join me on this musical journey and turn this idea into a reality? 🎸"}
              </motion.p>
            </motion.span>
          )
        }



        <div className="fixed bottom-0 flex flex-row items-top pt-24 translate-y-10 -translate-x-14">
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
                  onClick={() => { window.location.href = `/waiting?playerId=${idUnique}&&scenario=0` }}
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

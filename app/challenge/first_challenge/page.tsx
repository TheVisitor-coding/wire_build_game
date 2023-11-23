"use client"

import Image from 'next/image';
import { FaArrowRightLong, FaArrowRotateLeft } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Lottie from 'lottie-react';
import sad from "@/public/sad.json";
import { useSearchParams } from 'next/navigation';

function Section1() {
    const searchParams = useSearchParams();
    const playerId = searchParams.get("playerId");
    const [choice, setChoice] = useState(0);
    const [isFailed, setIsFailed] = useState(false);

    function verifyAnswer() {
        if (choice === 2) {
            window.location.href = `/challenge/success?scenario=1&&playerId=${playerId}`;
        } else {
            setIsFailed(true);
        }
    }

    return (
        <>
            {
                !isFailed ? (

                    <div className='h-screen w-full p-5 flex flex-col items-center justify-center gap-8'>
                        <h1 className='text-black font-kreon font-bold text-xl text-center'>Complete this text with the correct solution</h1>
                        <Image src="/chall1.png" width={500} height={500} alt="grid" />
                        <div className='w-11/12 flex flex-col gap-5'>
                            <p className='font-kreon text-black'>The grid is a page layout system.
                                It is based on a _______ dimensional grid that can be defined to suit your needs.</p>
                            <span className='flex justify-center flex-col gap-2 text-black'>
                                <button
                                    onClick={() => setChoice(1)}
                                    className={`px-10 py-2 bg-grey rounded-xl shadow-lg ${choice === 1 ? 'border-2 border-green-500' : ''}`}>One</button>
                                <button
                                    onClick={() => setChoice(2)}
                                    className={`px-10 py-2 bg-grey rounded-xl shadow-lg ${choice === 2 ? 'border-2 border-green-500' : ''}`}>Two</button>
                                <button
                                    onClick={() => setChoice(3)}
                                    className={`px-10 py-2 bg-grey rounded-xl shadow-lg ${choice === 3 ? 'border-2 border-green-500' : ''}`}>Three</button>
                            </span>

                        </div>
                        <motion.button
                            onClick={() => verifyAnswer()}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
                            className="px-8 py-2 bg-blue rounded-full"
                        >
                            <FaArrowRightLong />
                        </motion.button>
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
                )
            }


        </>
    );
}

export default Section1;
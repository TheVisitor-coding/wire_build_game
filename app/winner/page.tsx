"use client"

import Lottie from "lottie-react";
import win from "@/public/win.json";
import { IoMdGlasses } from "react-icons/io";

function Winner() {
    return ( 
        <>
            <div className="h-screen w-full flex items-center flex-col justify-center gap-5">
                <h1 className="text-black text-3xl">Congratulations !!</h1>
                <h2 className="text-black text-2xl text-center">You win !</h2>
                <p className="text-black text-xl text-center flex flex-row gap-2 items-center">You are the goat of Wireframe <IoMdGlasses /></p>
                <Lottie animationData={win} className="w-3/4" />
            </div>
        </>
     );
}

export default Winner;
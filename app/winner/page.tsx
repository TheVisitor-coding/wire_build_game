"use client"

import Lottie from "lottie-react";
import win from "@/public/win.json";
import firework from "@/public/firework.json";
function Winner() {
    return (
        <>
            <div className="h-screen w-full flex items-center flex-col justify-center gap-5 p-5 relative">
                <h1 className="text-black text-3xl">Congratulations !!</h1>
                <h2 className="text-black text-2xl text-center">You win !</h2>
                <p className="text-black text-xl text-center">You've won absolutely nothing except our congratulations !!</p>
                <Lottie animationData={win} className="w-3/4" />
                <Lottie animationData={firework} className="w-3/4 absolute bottom-0" />
            </div>
        </>
    );
}

export default Winner;
import Image from "next/image";
import ChatBubble from "./chatBubble";

function Persona() {
  return (
    <>
      <div className="h-screen flex items-center flex-col overflow-hidden">
        <div className="w-5/6 bg-grey rounded-md shadow-chat h-1/5 mt-8"></div>
        <div className="w-5/6 bg-grey rounded-md shadow-chat h-1/5 mt-8"></div>
        <div className="flex flex-row items-center">
          <Image src={"/homme.svg"} width={300} height={300} alt="man" />
          <div>
            <ChatBubble />
            <button></button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Persona;

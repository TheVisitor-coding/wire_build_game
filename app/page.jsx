"use client"
import Loading from "@/components/loader";
import Menu from "@/components/Menu";
import { useEffect, useState } from "react";

function Home() {

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  })

  return (
    <>
      {
        loading ?
          (
            <div className="w-full h-screen flex items-center justify-center">
              <Loading />
            </div>
          )
          : (
            <div>
              <Menu />
            </div>
          )
      }
    </>
  );
}
export default Home;

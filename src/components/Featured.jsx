import { motion } from "framer-motion";
import React, { useState } from "react";
import { Power4 } from "gsap/all";

function Featured() {
  const [isHovering, setHovering] = useState(false);

  return (
    <div className="w-full py-20">
      <div className="w-full px-10 border-b-[1px] border-zinc-700 pb-20">
        <h1 className='text-7xl font-["Neue_Montreal"] tracking-tight'>
          Featured projects
        </h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
          <div
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className="cardcontainer relative  w-1/2 h-[75vh]"
          >
            <h1 className="left-full -translate-x-1/2 top-1/2 -translate-y-1/2 absolute z-[9] leading-none  flex overflow-hidden tracking text-[20vh] font-['Founders_Grotesk_X-Condensed'] text-[#CDEA68]">
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  className="inline-block translate-y-full"
                  initial={{ y: "100%" }}
                  animate={isHovering ? { y: "0%" } : { y: "100%" }}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full rounded-xl h-full bg-green-600 overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
              />
            </div>
          </div>
          <div className="cardcontainer relative w-1/2 h-[75vh]">
            <h1 className="right-full translate-x-1/2 top-1/2 -translate-y-1/2 overflow-hidden absolute z-[9] leading-none tracking flex text-[20vh] font-['Founders_Grotesk_X-Condensed'] text-[#CDEA68]">
              {"".split("").map((item, index) => (
                <motion.span
                  className="inline-block translate-y-full"
                  initial={{ y: "100%" }}
                  animate={isHovering ? { y: "0%" } : { y: "100%" }}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full rounded-xl h-full overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;

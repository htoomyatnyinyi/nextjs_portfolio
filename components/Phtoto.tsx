"use client";

import Image from "next/image";
import { motion } from "framer-motion";
// import hmnn from "@/public/hmnnn.png";
import hmnn from "@/public/hm.png";

const Phtoto = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.4, duration: 0.2, ease: "easeIn" }}
      className="w-full h-full "
      // className="w-full h-full relative "
    >
      {/* image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 0.2, ease: "easeInOut" }}
        className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten absolute  "
      >
        <Image
          src={hmnn}
          alt="hmnn"
          priority
          quality={100}
          fill
          // fill={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain"
        />
      </motion.div>

      {/* circle */}
      <motion.svg
        className="w-[298px] h-[298px] xl:w-[506px] xl:h-[506px] relative "
        // className="w-[380px] xl:w-[506px] h-[300px] xl:h-[506px] relative"
        fill="transparent"
        viewBox="0 0 506 506"
        // xmlns="http://www.w3.org/2000/svg"
      >
        {/* <motion.circle
          cx="253"
          cy="253"
          r="250"
          stroke="#00ff99"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ strokeDasharray: "24 10 0 0" }}
          animate={{
            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 20 25"],
            rotate: [120, 360],
          }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        /> */}
      </motion.svg>
    </motion.div>
  );
};

export default Phtoto;

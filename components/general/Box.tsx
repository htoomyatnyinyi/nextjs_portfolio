"use client";
import React from "react";
import { motion, useScroll } from "framer-motion";

const Box = () => {
  return (
    <div className="bg-sky-200 p-2 m-10">
      <motion.div
        // className="h-40 w-40 bg-green-600 border overflow-auto  "
        animate={{ x: 500, opacity: 10 }}
        initial={{ opacity: 100 }}
        drag
        dragConstraints={{
          right: 40,
          left: 10,
        }}
      >
        hi
      </motion.div>
      <motion.div
        className="h-40 w-40  border   "
        animate={{ x: 0, backgroundColor: "green" }}
        initial={{ x: -1000 }}
      ></motion.div>
      <div className="h-46 w-full overflow-scroll">
        <A />
        <A />
        <A />
      </div>
      <div className="p-2 m-1">
        <p className="p-2 m-1 bg-green-500 group">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam quidem,
          quod magnam dolore cumque iure possimus quae aut accusamus officiis
          dignissimos ad beatae nobis, eveniet rem facere eligendi. Qui,
          expedita.
          <button
            className="button-hm group-hover:scale-100
             transition-all duration-500 ease-in-out"
            onClick={() => {
              console.log("Button clicked");
            }}
          >
            Click Me
          </button>
        </p>
      </div>
    </div>
  );
};

export default Box;

const A = () => {
  return (
    <div>
      <p>Hi A</p>
      <B>
        <h1>This is Childrne Props</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          hic ipsa aperiam fuga? Vitae praesentium quam veniam quia quasi sunt,
          atque ex sint nulla maiores a, veritatis maxime excepturi? Debitis?
        </p>
      </B>
    </div>
  );
};

import type { ReactNode } from "react";

const B = ({ children }: { children: ReactNode }) => {
  const { scrollYProgress } = useScroll();
  const [animate, setAnimate] = React.useState(false);

  return (
    <motion.div
      className="bg-sky-400 p-2 "
      // animate={{
      //   rotate: [2, 4, 4, 6, 3, 2, 0],
      //   scale: [0, "100%"],
      // }}
      animate={{ x: animate ? 0 : 100 }}
      transition={{ duration: 2 }}
      // whileHover={{
      //   // scale: 1.1,
      //   // rotate: [10, 20, 30, 20, 10, 0],
      //   y: 100,
      //   transition: { duration: 0.5 },
      // }}
      onClick={() => {
        setAnimate(!animate);
      }}
    >
      {children}
      <motion.div
        className="bg-sky-500 p-2"
        style={{ scaleX: scrollYProgress }}
        initial={{ backgroundColor: "rgb(0, 255, 0)", opacity: 0 }}
        whileInView={{
          backgroundColor: "rgb(255, 0, 0)",
          opacity: 1,
          transition: { duration: 3 },
        }}
        // animate={{ x: 100, opacity: 1 }}
        // initial={{ opacity: 0 }}
        // transition={{ duration: 1 }}
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo et
        repellendus expedita obcaecati! Sapiente vitae aliquid saepe ducimus
        atque ipsam porro quia, velit laboriosam exercitationem nulla possimus
        itaque commodi excepturi.{" "}
      </motion.div>
    </motion.div>
  );
};

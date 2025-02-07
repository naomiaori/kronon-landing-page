"use client";

import React, { PropsWithChildren, useEffect, useRef } from "react";

import { motion, useAnimation, useInView } from "framer-motion";
import { twMerge } from "tailwind-merge";

type TProps = {
  className?: string;
};

const ScrollReveal = ({ children, className }: PropsWithChildren<TProps>) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <div ref={ref} className={twMerge("", className)}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
        viewport={{
          amount: "all",
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ScrollReveal;

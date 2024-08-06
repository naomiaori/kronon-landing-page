"use client";

import React from "react";

import { useScroll, motion, useTransform } from "framer-motion";

import ArrowIcon from "#/public/icon/arrow-down.svg";
import Logo from "#/public/logo/logo.svg";

const LogoSection = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0, 400]);

  return (
    <section className="h-[200rem] flex justify-center z-1">
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-1">
        <Logo />
      </div>
      <motion.div
        style={{
          scale,
          position: "sticky",
          top: "55%",
          borderRadius: "50%",
          width: "20px",
          height: "20px",
          background: "white",
        }}
      />
      <div className="fixed bottom-[5.3rem] z-1">
        <ArrowIcon />
      </div>
    </section>
  );
};

export default LogoSection;

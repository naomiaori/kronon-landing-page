"use client";

import React, { PropsWithChildren } from "react";

import { LinkProps } from "next/dist/client/link";
import Link from "next/link";

import { motion, useAnimation } from "framer-motion";
import { twMerge } from "tailwind-merge";

import ArrowIcon from "#/public/icon/arrow-right-up.svg";

type TProps = {
  opacity?: string;
  textSize?: string;
  iconSize?: number;
} & PropsWithChildren<LinkProps>;

const ArrowLink = ({
  opacity,
  textSize = "text-base",
  iconSize = 12,
  href,
  children,
}: TProps) => {
  const controls1 = useAnimation();
  const controls2 = useAnimation();

  const handleMouseEnter = () => {
    controls1.start({
      x: 10,
      y: -10,
      opacity: 0,
      transition: { type: "spring", stiffness: 900, damping: 35 },
    });
    controls2.start({
      x: 0,
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 900, damping: 35, delay: 0.05 },
    });
  };

  const handleMouseLeave = () => {
    controls1.start({
      x: 0,
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 900, damping: 35, delay: 0.05 },
    });
    controls2.start({
      x: -10,
      y: 10,
      opacity: 0,
      transition: { type: "spring", stiffness: 900, damping: 35 },
    });
  };

  return (
    <Link
      href={href}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={twMerge(
        "cursor-pointer text-white border-b border-b-white w-fit flex items-center gap-4",
        opacity,
      )}
    >
      {children && <span className={textSize}>{children}</span>}
      <div
        className="relative"
        style={{ width: `${iconSize}px`, height: `${iconSize}px` }}
      >
        <motion.div
          className="absolute"
          initial={{ x: 0, y: 0 }}
          animate={controls1}
        >
          <ArrowIcon
            width={iconSize}
            height={iconSize}
            className="text-white"
          />
        </motion.div>
        <motion.div
          className="absolute"
          initial={{ x: -10, y: 10, opacity: 0 }}
          animate={controls2}
        >
          <ArrowIcon
            width={iconSize}
            height={iconSize}
            className="text-white"
          />
        </motion.div>
      </div>
    </Link>
  );
};

export default ArrowLink;

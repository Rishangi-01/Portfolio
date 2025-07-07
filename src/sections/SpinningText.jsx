import React from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

const BASE_TRANSITION = {
  repeat: Infinity,
  ease: "linear",
};

const BASE_ITEM_VARIANTS = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 1,
  },
};

export function SpinningText({
  text,
  duration = 10,
  style,
  className,
  reverse = false,
  radius = 5,
  transition = {},
  variants = {},
  children, // fallback to children if text not provided
}) {
  const displayText = text || children;

  if (
    typeof displayText !== "string" &&
    !Array.isArray(displayText)
  ) {
    throw new Error("Text must be a string or an array of strings");
  }

  const finalText = Array.isArray(displayText)
    ? displayText.join("")
    : displayText;

  const letters = finalText.split("");
  letters.push(" "); // spacing

  const finalTransition = {
    ...BASE_TRANSITION,
    ...transition,
    duration:
      transition?.duration !== undefined
        ? transition.duration
        : duration,
  };

  const containerVariants = {
    hidden: { rotate: 0 },
    visible: {
      rotate: reverse ? -360 : 360,
      transition: finalTransition,
    },
  };

  return (
    <motion.div
      className={twMerge("relative", className)}
      style={style}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {letters.map((letter, index) => (
        <span
          key={`${index}-${letter}`}
          className="absolute left-1/2 top-1/2 inline-block"
          style={{
            "--index": index,
            "--total": letters.length,
            "--radius": radius,
            transform: `
              translate(-50%, -50%)
              rotate(${(360 / letters.length) * index}deg)
              translateY(-${radius}ch)
            `,
            transformOrigin: "center",
          }}
        >
          {letter}
        </span>
      ))}
      <span className="sr-only">{finalText}</span>
    </motion.div>
  );
}

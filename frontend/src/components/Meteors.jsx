import React, { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

export const Meteors = ({
  number = 8,
  minDelay = 0.2,
  maxDelay = 1.2,
  minDuration = 2,
  maxDuration = 10,
  angle = 215,
  className,
}) => {
  const [meteorStyles, setMeteorStyles] = useState([]);

  useEffect(() => {
    const styles = Array.from({ length: number }).map(() => ({
      "--angle": `-${angle}deg`,
      top: "-5%",
      left: `calc(0% + ${Math.floor(Math.random() * window.innerWidth)}px)`,
      animationDelay: `${Math.random() * (maxDelay - minDelay) + minDelay}s`,
      animationDuration: `${
        Math.floor(Math.random() * (maxDuration - minDuration) + minDuration)
      }s`,
    }));
    setMeteorStyles(styles);
  }, [number, minDelay, maxDelay, minDuration, maxDuration, angle]);

  return (
    <>
      {meteorStyles.map((style, idx) => (
        <span
          key={idx}
          style={style}
          className={twMerge(
            "pointer-events-none absolute w-0.5 h-0.5 rotate-[var(--angle)] animate-meteor rounded-full bg-zinc-500 shadow-[0_0_0_1px_#ffffff10]",
            className
          )}
        >
          <div className="pointer-events-none absolute top-1/2 -z-10 h-[2px] w-[150px] -translate-y-1/2 bg-gradient-to-r from-zinc-500 to-transparent" />
        </span>
      ))}
    </>
  );
};

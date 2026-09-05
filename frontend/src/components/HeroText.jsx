import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";

const HeroText = () => {
  const words = ["Secure", "Modern", "Scalable"];

  return (
    <div className="hero-content relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 py-28 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-32">
      <motion.div
        className="max-w-2xl"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="hero-kicker mb-7 inline-flex items-center gap-3">
          <span className="hero-status-dot" />
          Available for select projects
        </div>
        <p className="mb-4 text-base font-medium text-neutral-300 sm:text-lg">
          Hi, I&apos;m <span className="text-white">Rishangi Yadav</span>
        </p>
        <h1 className="hero-title max-w-3xl text-5xl font-semibold leading-[0.98] tracking-tight text-white sm:text-7xl lg:text-5xl">
          Building digital products that feel <span className="hero-word"><FlipWords words={words} /></span>.
        </h1>
        <p className="mt-7 max-w-xl text-base leading-7 text-neutral-400 sm:text-lg">
          Full-stack developer crafting thoughtful interfaces and dependable web experiences from idea to launch.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-4">
          <a className="hero-button hero-button-primary" href="/work">
            View my work
            <span aria-hidden="true">↗</span>
          </a>
          <a className="hero-button hero-button-secondary" href="/contact-us">
            Let&apos;s talk
          </a>
        </div>
        <div className="hero-metrics mt-14 flex flex-wrap gap-x-8 gap-y-5 border-t border-white/10 pt-6">
          <div><strong>02+</strong><span>years experience</span></div>
          <div><strong>12+</strong><span>projects shipped</span></div>
          <div><strong>100%</strong><span>curiosity</span></div>
        </div>
      </motion.div>

      <motion.div
        className="hero-portrait-wrap"
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="hero-portrait-ring" />
        <div className="hero-portrait-orbit hero-portrait-orbit-one" />
        <div className="hero-portrait-orbit hero-portrait-orbit-two" />
        <img
          src="/assets/Rishangi-img.png"
          alt="Rishangi Yadav working at her laptop"
          className="hero-portrait"
        />
        <div className="hero-floating-card hero-floating-card-top">
          <span className="hero-card-icon">✦</span>
          <span><strong>Design-minded</strong><small>developer</small></span>
        </div>
        <div className="hero-floating-card hero-floating-card-bottom">
          <span className="hero-card-icon hero-card-icon-pink">⌘</span>
          <span><strong>Turning ideas</strong><small>into interfaces</small></span>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroText;

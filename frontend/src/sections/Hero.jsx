import HeroText from "../components/HeroText";

const Hero = () => {
  return (
    <section className="hero-section relative flex min-h-screen items-center overflow-hidden c-space">
      <div className="hero-grid absolute inset-0" aria-hidden="true" />
      <div className="hero-glow hero-glow-left" aria-hidden="true" />
      <div className="hero-glow hero-glow-right" aria-hidden="true" />
      <HeroText />
    </section>
  );
};

export default Hero;

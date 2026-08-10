import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";
import { Globe } from "../components/globe";

const About = () => {
  const highlights = [
    { value: "4+", label: "years building polished web experiences" },
    { value: "Remote", label: "ready for global collaborations" },
    { value: "Full-stack", label: "from UI design to deployment" },
  ];

  const strengths = [
    "Responsive and accessible frontend interfaces",
    "Scalable React and modern JavaScript applications",
    "Thoughtful UI systems with clean, maintainable code",
  ];

  return (
    <section className="min-h-screen px-5 py-24 md:px-10 lg:px-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-6">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 shadow-2xl backdrop-blur md:p-12">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-aqua">About me</p>
              <h1 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">
                I build thoughtful digital experiences with clarity and craft.
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-neutral-300">
                I’m Rishangi Yadav, a developer who enjoys turning ideas into beautiful,
                performant products. Over the years, I’ve worked across frontend,
                interaction design, and product-focused development to create experiences
                people remember.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#skills"
                  className="rounded-full border border-white/20 px-5 py-3 text-sm font-medium text-white transition hover:border-aqua hover:text-aqua"
                >
                  Explore my stack
                </a>
                <a
                  href="mailto:rishangi@example.com"
                  className="rounded-full bg-white/10 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/20"
                >
                  Let’s work together
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-primary/70 p-3">
              <img
                src="/assets/rishi1.jpg"
                alt="Rishangi Yadav"
                className="h-full min-h-[320px] w-full rounded-[1.2rem] object-cover"
              />
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.label}
              className="rounded-[1.4rem] border border-white/10 bg-gradient-to-br from-storm/80 to-indigo/70 p-6"
            >
              <p className="text-3xl font-semibold text-white">{item.value}</p>
              <p className="mt-2 text-sm text-neutral-300">{item.label}</p>
            </div>
          ))}
        </div>

        <div id="skills" className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-aqua">What I enjoy</p>
            <h2 className="mt-3 text-2xl font-semibold text-white">Creating polished products with purpose</h2>
            <ul className="mt-6 space-y-3 text-neutral-300">
              {strengths.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 text-aqua">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-storm/80 to-indigo/70 p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-aqua">Toolbox</p>
            <h2 className="mt-3 text-2xl font-semibold text-white">Modern tools for modern products</h2>
            <div className="mt-6">
              <Frameworks />
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-aqua">Approach</p>
            <h2 className="mt-3 text-2xl font-semibold text-white">Designing with both detail and empathy</h2>
            <p className="mt-4 text-neutral-300">
              I focus on creating interfaces that feel intuitive, purposeful, and easy to
              use. Every decision is shaped by clarity, performance, and the story the product
              needs to tell.
            </p>
            <p className="mt-4 text-neutral-300">
              Whether I’m shaping a landing page, a dashboard, or a complete experience, I aim
              for a balanced mix of aesthetic quality and thoughtful engineering.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-gradient-to-tl from-[#3A3A3A] via-[#242424] to-[#3A3A3A] p-8">
            <div className="relative z-10 max-w-[60%]">
              <p className="text-sm uppercase tracking-[0.3em] text-aqua">Location</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">Based in India, available worldwide</h2>
              <p className="mt-4 text-neutral-300">
                Open to remote collaboration and meaningful projects across time zones.
              </p>
            </div>
            <div className="absolute left-[30%] top-[8%]">
              <Globe />
            </div>
          </div>
        </div>

        <div className="rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-royal/80 to-lavender/70 p-8 text-center shadow-2xl">
          <h2 className="text-3xl font-semibold text-white">Let’s build something meaningful together.</h2>
          <p className="mx-auto mt-3 max-w-2xl text-neutral-200">
            If you have a product, idea, or brand that needs a thoughtful digital presence,
            I’d love to help bring it to life.
          </p>
          <div className="mt-6 flex justify-center">
            <CopyEmailButton />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

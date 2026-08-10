import { useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "../components/Alert";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        "service_79b0nyj",
        "template_17us8im",
        {
          from_name: formData.name,
          to_name: "Ali",
          from_email: formData.email,
          to_email: "AliSanatiDev@gmail.com",
          message: formData.message,
        },
        "pn-Bw_mS1_QQdofuV"
      );

      setFormData({ name: "", email: "", message: "" });
      showAlertMessage("success", "Your message has been sent!");
    } catch (error) {
      console.log(error);
      showAlertMessage("danger", "Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="min-h-screen px-5 py-24 md:px-10 lg:px-16">
      {showAlert && <Alert type={alertType} text={alertMessage} />}

      <div className="mx-auto flex max-w-7xl flex-col gap-8 rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 shadow-2xl backdrop-blur md:p-12 lg:flex-row lg:items-center lg:gap-12">
        <div className="max-w-xl">
          <p className="text-sm uppercase tracking-[0.35em] text-aqua">Contact</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
            Let’s build something meaningful together.
          </h1>
          <p className="mt-6 text-lg text-neutral-300">
            Whether you need a fresh website, a polished product experience, or a thoughtful
            redesign, I’m ready to help bring your idea to life.
          </p>

          <div className="mt-8 space-y-3 text-sm text-neutral-300">
            <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 inline-block">
              Email: hello@rishangi.dev
            </div>
            <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 inline-block">
              Open to remote collaborations worldwide
            </div>
          </div>
        </div>

        <form className="w-full max-w-xl rounded-[1.5rem] border border-white/10 bg-primary/70 p-6 shadow-xl md:p-8" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="name" className="text-sm font-medium text-neutral-200">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="mt-2 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white outline-none transition focus:border-aqua focus:ring-2 focus:ring-aqua/20"
              placeholder="Rishi Yadav"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-5">
            <label htmlFor="email" className="text-sm font-medium text-neutral-200">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="mt-2 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white outline-none transition focus:border-aqua focus:ring-2 focus:ring-aqua/20"
              placeholder="rishi@gmail.com"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="text-sm font-medium text-neutral-200">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              className="mt-2 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white outline-none transition focus:border-aqua focus:ring-2 focus:ring-aqua/20"
              placeholder="Tell me about your project..."
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-gradient-to-r from-royal to-lavender px-4 py-3 text-sm font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

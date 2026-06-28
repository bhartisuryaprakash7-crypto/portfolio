import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { profile } from "../../data/content.js";

const iconMap = {
  FaGithub,
  FaLinkedin,
  FaTwitter,
};

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setStatus("sending");

    setTimeout(() => {
      setStatus("sent");
    }, 1000);
  };

  const infoItems = [
    {
      Icon: FaEnvelope,
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
    {
      Icon: FaPhone,
      label: "Phone",
      value: profile.phone,
      href: `tel:${profile.phone}`,
    },
    {
      Icon: FaMapMarkerAlt,
      label: "Location",
      value: profile.location,
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-28 px-6 bg-bg2">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-xs tracking-[0.2em] text-purple border border-glow px-4 py-1.5 rounded-full">
            GET IN TOUCH
          </span>

          <h2 className="font-syne text-4xl lg:text-5xl font-bold text-white mt-4 mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>

          <p className="text-dim text-lg max-w-md mx-auto">
            Have a project or just want to say hello? I'm always open.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            {infoItems.map(({ Icon, label, value, href }) => (
              <div
                key={label}
                className="flex items-center gap-4 p-5 card-bg border border-glow rounded-xl hover:border-purple/40 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-purple/15 flex items-center justify-center text-purple group-hover:bg-purple/25 transition-colors">
                  <Icon size={16} />
                </div>

                <div>
                  <p className="font-mono text-xs text-muted uppercase tracking-wider mb-1">
                    {label}
                  </p>

                  {href ? (
                    <a
                      href={href}
                      className="text-sm text-white hover:text-purple transition-colors"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm text-white">{value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Social Links */}
            <div className="p-5 card-bg border border-glow rounded-xl">
              <p className="font-mono text-xs text-muted uppercase tracking-wider mb-4">
                Find me on
              </p>

              <div className="flex gap-3">
                {profile.social.map((s) => {
                  const Icon = iconMap[s.icon];

                  return (
                    <a
                      key={s.label}
                      href={s.url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={s.label}
                      className="w-10 h-10 flex items-center justify-center rounded-xl border border-glow text-dim hover:text-purple hover:border-purple/40 hover:-translate-y-1 transition-all text-lg"
                    >
                      {Icon && <Icon />}
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 card-bg border border-glow rounded-2xl p-8 flex flex-col gap-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                {
                  name: "name",
                  label: "Name",
                  type: "text",
                  placeholder: "Your name",
                },
                {
                  name: "email",
                  label: "Email",
                  type: "email",
                  placeholder: "your@email.com",
                },
              ].map(({ name, label, type, placeholder }) => (
                <div key={name} className="flex flex-col gap-2">
                  <label className="font-mono text-xs text-muted uppercase tracking-wider">
                    {label}
                  </label>

                  <input
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    required
                    value={form[name]}
                    onChange={handleChange}
                    className="bg-white/5 border border-white/10 focus:border-purple/50 rounded-xl px-4 py-3 text-sm text-white placeholder:text-muted outline-none transition-colors"
                  />
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-mono text-xs text-muted uppercase tracking-wider">
                Subject
              </label>

              <input
                type="text"
                name="subject"
                placeholder="Project inquiry..."
                value={form.subject}
                onChange={handleChange}
                className="bg-white/5 border border-white/10 focus:border-purple/50 rounded-xl px-4 py-3 text-sm text-white placeholder:text-muted outline-none transition-colors"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-mono text-xs text-muted uppercase tracking-wider">
                Message
              </label>

              <textarea
                rows={5}
                required
                name="message"
                placeholder="Tell me about your project..."
                value={form.message}
                onChange={handleChange}
                className="bg-white/5 border border-white/10 focus:border-purple/50 rounded-xl px-4 py-3 text-sm text-white placeholder:text-muted outline-none transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full py-3.5 bg-purple hover:bg-purple/90 disabled:opacity-60 text-white font-semibold rounded-xl shadow-glow hover:shadow-glow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              {status === "idle" && "✉ Send Message"}
              {status === "sending" && "Sending..."}
              {status === "sent" && "✓ Message Sent!"}
            </button>
          </motion.form>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-white/5 text-center font-mono text-xs text-muted">
          © {new Date().getFullYear()} {profile.name} — Built with React Three
          Fiber & Tailwind CSS
        </div>
      </div>
    </section>
  );
}
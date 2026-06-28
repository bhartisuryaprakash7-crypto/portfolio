import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaDownload, FaArrowRight } from 'react-icons/fa'
import { profile, stats } from '../../data/content.js'

const iconMap = { FaGithub, FaLinkedin, FaTwitter }

const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 36 },
  animate:    { opacity: 1, y: 0  },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
})

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center
        pt-24 pb-16 px-6 max-w-6xl mx-auto"
    >
      <div className="flex flex-col lg:flex-row items-center justify-between gap-16">

        {/* ── Left: Text ── */}
        <div className="flex-1 space-y-6">

          {/* Available badge */}
          {profile.available && (
            <motion.div {...fadeUp(0)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                border border-green/30 bg-green/5 text-green text-sm font-mono"
            >
              <span className="w-2 h-2 rounded-full bg-green animate-pulse2" />
              Available for work
            </motion.div>
          )}

          {/* Name & title */}
          <motion.div {...fadeUp(0.1)} className="space-y-2">
            <p className="font-mono text-purple text-sm tracking-widest uppercase">
              Hello, I'm
            </p>
            <h1 className="font-syne text-5xl lg:text-7xl font-extrabold leading-none text-white">
              {profile.name}
            </h1>
            <p className="font-mono text-xl text-blue">{profile.title}</p>
          </motion.div>

          {/* Subtitle */}
          <motion.p {...fadeUp(0.2)}
            className="text-dim text-lg leading-relaxed max-w-lg"
          >
            {profile.subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div {...fadeUp(0.3)} className="flex flex-wrap gap-4">
            <button
  onClick={() =>
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
    })
  }
  className="flex items-center gap-2 px-6 py-3 bg-purple hover:bg-purple/90 text-white font-semibold rounded-xl shadow-glow hover:shadow-glow-lg hover:-translate-y-1 transition-all duration-300"
>
  View Projects <FaArrowRight />
</button>

<a
  href={profile.resumeUrl}
  download
  className="flex items-center gap-2 px-6 py-3 border border-glow text-white font-semibold rounded-xl hover:border-purple/60 hover:bg-purple/10 hover:-translate-y-1 transition-all duration-300"
>
  Resume <FaDownload />
</a>
          </motion.div>

          {/* Social icons */}
          <motion.div {...fadeUp(0.4)} className="flex gap-3">
            {profile.social.map((s) => {
              const Icon = iconMap[s.icon]
          return (
  <a
    key={s.label}
    href={s.url}
    target="_blank"
    rel="noreferrer"
    aria-label={s.label}
    className="w-11 h-11 flex items-center justify-center rounded-xl border border-glow text-dim hover:text-purple hover:border-purple/50 hover:-translate-y-1 hover:shadow-glow transition-all duration-300 text-lg"
  >
    {Icon && <Icon />}
  </a>
)
            })}
          </motion.div>
        </div>

        {/* ── Right: Photo ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1  }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex-shrink-0"
        >
          {/* Glow blob */}
          <div className="absolute -inset-8 rounded-full
            bg-gradient-to-br from-purple/25 via-blue/15 to-transparent blur-2xl" />

          {/* Spinning rings */}
          <div className="absolute -inset-3 rounded-full border border-purple/30
            border-t-purple animate-spin2" />
          <div
            className="absolute -inset-7 rounded-full border border-dashed border-purple/15"
            style={{ animation: 'spin2 8s linear infinite reverse' }}
          />

          {/* Photo */}
          <div className="relative w-56 h-56 lg:w-72 lg:h-72">
            <img
              src={profile.photo}
              alt={profile.name}
              className="w-full h-full rounded-full object-cover object-top
                border-2 border-purple/40 shadow-glow"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-t
              from-purple/10 to-transparent pointer-events-none" />
          </div>

          {/* Floating badges */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-4 -left-8 px-3 py-2 card-bg border-glow
              rounded-xl text-xs font-mono text-violet shadow-glow"
          >
            ⚡ Open to work
          </motion.div>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            className="absolute -top-4 -right-8 px-3 py-2 card-bg border-glow
              rounded-xl text-xs font-mono text-blue shadow-glow-blue"
          >
            🚀 {profile.location}
          </motion.div>
        </motion.div>
      </div>

      {/* Stats row */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0  }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="mt-16 pt-10 border-t border-white/5
          grid grid-cols-2 md:grid-cols-4 gap-6"
      >
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col gap-1">
            <span className="font-syne text-3xl font-extrabold text-gradient">
              {s.number}
            </span>
            <span className="font-mono text-xs text-muted tracking-wider">
              {s.label}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
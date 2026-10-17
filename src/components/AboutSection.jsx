import { memo } from 'react';
import { Gsap } from '../utils/gsapAnimate';
import { MapPin } from 'lucide-react';

/* ─────────────────────────────────────────
   Static data
   ───────────────────────────────────────── */
const STATS = [
  { value: 'BUILD', label: 'Hands-on\nApproach' },
  { value: 'AI+WEB', label: 'Product\nStack' },
  { value: 'OPEN', label: 'To\nCollab' },
];

const CAPABILITIES = [
  'Machine Learning',
  'NLP & Speech Processing',
  'Computer Vision',
  'Full-Stack Delivery',
];

/* ─────────────────────────────────────────
   Main Component
   ───────────────────────────────────────── */
const AboutSection = memo(function AboutSection() {
  return (
    <section id="about-section" className="pt-14 md:pt-20 pb-14 md:pb-20 w-full relative bg-[#FAF9F6] dark:bg-[#0A0A0A] overflow-hidden transition-colors duration-500">

      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute -left-24 bottom-0 w-[380px] h-[380px] bg-black/[0.03] rounded-full blur-[100px]" />
      </div>

      <div className="max-w-[1380px] mx-auto px-6 md:px-12 relative z-10">

        {/* ── Section Label ── */}
        <Gsap.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-16 md:mb-20"
        >
          <span className="w-[6px] h-[6px] rounded-full bg-black/40 dark:bg-white/40 shrink-0" />
          <span className="font-mono text-[14px] md:text-[17px] font-bold uppercase tracking-[0.24em] text-black/50 dark:text-white/50">
            01 — About
          </span>
          <div className="flex-1 h-px bg-black/[0.07] dark:bg-white/[0.12]" />
        </Gsap.div>

        <div className="grid lg:grid-cols-[400px_1fr] xl:grid-cols-[440px_1fr] gap-14 lg:gap-20 xl:gap-28 items-start">

          {/* ══════════════════════════════
              LEFT COLUMN — Profile & Meta
              ══════════════════════════════ */}
          <Gsap.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="lg:sticky lg:top-28"
          >
            {/* Profile photo */}
            <div className="relative">
              <div className="absolute -top-2.5 -left-2.5 w-full h-full border border-black/15 dark:border-white/15 rounded-[4px] pointer-events-none" />

              <div className="relative aspect-[4/5] w-full rounded-[4px] overflow-hidden border border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.03]">
                <img
                  src="/profile.webp"
                  alt="Malvin Raditya Nugraha"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover [object-position:44%_42%] scale-[1.72]"
                />

                {/* Corner brackets */}
                <span className="absolute top-3.5 left-3.5 w-5 h-px bg-black/20 dark:bg-white/25" />
                <span className="absolute top-3.5 left-3.5 w-px h-5 bg-black/20 dark:bg-white/25" />
                <span className="absolute bottom-3.5 right-3.5 w-5 h-px bg-black/20 dark:bg-white/25" />
                <span className="absolute bottom-3.5 right-3.5 w-px h-5 bg-black/20 dark:bg-white/25" />
              </div>
            </div>

            {/* Status + Location */}
            <div className="mt-4 grid grid-cols-2 gap-2.5">
              <div className="bg-white dark:bg-white/[0.05] border border-black/[0.08] dark:border-white/[0.1] rounded-[3px] py-3.5 px-4">
                <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-black/32 dark:text-white/40 mb-1.5">Status</p>
                <div className="flex items-center gap-2">
                  <span className="w-[6px] h-[6px] rounded-full bg-lime-500 shrink-0 select-none" />
                  <span className="text-[13px] font-bold text-black dark:text-white">Available</span>
                </div>
              </div>
              <div className="bg-white dark:bg-white/[0.05] border border-black/[0.08] dark:border-white/[0.1] rounded-[3px] py-3.5 px-4">
                <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-black/32 dark:text-white/40 mb-1.5">Location</p>
                <div className="flex items-center gap-1.5">
                  <MapPin size={11} className="text-black/38 dark:text-white/50 shrink-0" />
                  <span className="text-[13px] font-bold text-black dark:text-white">Indonesia</span>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="mt-2.5 grid grid-cols-3 gap-2.5">
              {STATS.map((stat, i) => (
                <div key={i} className="bg-white dark:bg-white/[0.05] border border-black/[0.08] dark:border-white/[0.1] rounded-[3px] py-4 px-3 text-center">
                  <p className="font-black text-[22px] text-black dark:text-white leading-none tabular-nums">{stat.value}</p>
                  <p className="font-mono text-[8px] uppercase tracking-[0.08em] text-black/32 dark:text-white/40 mt-1.5 leading-tight whitespace-pre-line">{stat.label}</p>
                </div>
              ))}
            </div>
          </Gsap.div>

          {/* ══════════════════════════════
              RIGHT COLUMN — Content
              ══════════════════════════════ */}
          <div className="flex flex-col">

            {/* Headline */}
            <Gsap.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="mb-8 md:mb-10"
            >
              {/* Eyebrow */}
              <p className="font-mono text-[9px] uppercase tracking-[0.28em] text-black/30 dark:text-white/40 mb-5">
                Based in Indonesia — Open to Work
              </p>

              {/* Main title */}
              <h2 className="font-display font-bold tracking-[-0.025em] leading-[1.08] text-black dark:text-white">
                <span className="block text-[44px] sm:text-[56px] lg:text-[64px] xl:text-[72px]">
                  AI Engineer
                </span>

                <span className="block text-[22px] sm:text-[26px] lg:text-[30px] xl:text-[34px] font-medium tracking-[-0.01em] text-black/55 dark:text-white/55 mt-2">
                  with Full-Stack Product Delivery
                </span>
              </h2>
            </Gsap.div>

            {/* Role subtitle */}
            <Gsap.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08, duration: 0.65 }}
              className="flex items-center gap-3 mb-8 md:mb-9"
            >

              <span className="font-mono text-[10px] md:text-[10.5px] uppercase tracking-[0.2em] text-black/35 dark:text-white/45">
                Machine Learning · NLP · Computer Vision · Full-Stack Delivery
              </span>
            </Gsap.div>

            {/* Bio */}
            <Gsap.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.14, duration: 0.75, ease: 'easeOut' }}
              className="space-y-4 text-[15px] md:text-[15.5px] font-light text-black/60 dark:text-white/60 leading-[1.88] max-w-[580px]"
            >
              <p>
                I'm <strong className="text-black dark:text-white font-semibold">Malvin Raditya Nugraha</strong>, an AI Engineer focused on building intelligent systems that are not only innovative, but production-ready and measurable in real-world environments.
              </p>
              <p>
                I specialize in Applied Machine Learning and AI-powered products, with full-stack delivery as a supporting strength to move ideas from prototype to reliable digital products.
              </p>
            </Gsap.div>

            {/* Divider */}
            <div className="mt-10 md:mt-12 mb-10 md:mb-12 h-px bg-black/[0.07] dark:bg-white/[0.12] max-w-[580px]" />

            {/* Core Capabilities */}
            <Gsap.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.18, duration: 0.75 }}
            >
              <p className="font-mono text-[9.5px] md:text-[10px] uppercase tracking-[0.22em] text-black/32 dark:text-white/40 mb-4">
                Core Focus & Supporting Skills
              </p>
              <div className="flex flex-wrap gap-2">
                {CAPABILITIES.map((cap, i) => (
                  <span
                    key={i}
                    className="font-mono text-[10px] md:text-[10.5px] uppercase tracking-[0.12em] font-bold text-black/75 dark:text-white/75 border border-black/[0.11] dark:border-white/[0.15] px-3.5 py-[9px] rounded-[3px] hover:border-black hover:bg-black hover:text-white dark:hover:border-white dark:hover:bg-white dark:hover:text-black transition-all duration-200 cursor-default"
                  >
                    {cap}
                  </span>
                ))}
              </div>
            </Gsap.div>

          </div>
        </div>
      </div>

    </section>
  );
});

export default AboutSection;

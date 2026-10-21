import { memo, useRef, useState, useEffect } from 'react';
import { Gsap, useGsapReducedMotion, useGsapScroll, useGsapTransform } from '../utils/gsapAnimate';
import { Terminal, Code2, Server, Cpu, Download, ArrowUpRight, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

// Shared Intl formatter — created once, reused on every tick
const jakartaFormatter = new Intl.DateTimeFormat('en-US', {
  timeZone: 'Asia/Jakarta',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: true,
});

// === LOCATION & TIME BADGE ===
// Uses direct DOM update via ref to avoid React re-renders every second
const LocationTimeBadge = () => {
  const timeRef = useRef(null);

  useEffect(() => {
    const update = () => {
      if (timeRef.current) {
        timeRef.current.textContent = jakartaFormatter.format(new Date());
      }
    };
    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center justify-center gap-3 sm:gap-5 font-mono text-xs uppercase tracking-[0.15em] text-black/50 dark:text-white/50">
      <div className="flex items-center gap-2">
        <span className="font-bold text-black/70 dark:text-white/70">Based in Indonesia</span>
      </div>
      <div className="w-[1px] h-3 bg-black/15 dark:bg-white/20" />
      <div className="flex items-center gap-1.5 tabular-nums">
        <span className="text-black/40 dark:text-white/40 hidden sm:inline">LOCAL:</span>
        <span ref={timeRef} className="font-bold text-black/70 dark:text-white/70" />
      </div>
    </div>
  );
};

// === DECORATIVE ORBITING ELEMENTS (Left & Right) ===
const OrbitingDecoration = ({ icon: Icon, delay, className, isRevealed, enableAmbientMotion }) => (
  <Gsap.div
    initial={false}
    animate={
      isRevealed
        ? { opacity: 1, y: 0, scale: 1 }
        : { opacity: 0, y: 12, scale: 0.9 }
    }
    transition={{
      opacity: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
      y: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
      scale: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
    }}
    className={`absolute flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-black/10 dark:border-white/15 bg-white/60 dark:bg-white/5 backdrop-blur-lg shadow-[0_10px_30px_rgba(0,0,0,0.12)] ${className}`}
    style={enableAmbientMotion && isRevealed ? {
      animation: `hero-float 5.8s ${delay + 0.35}s ease-in-out infinite`,
      willChange: 'transform',
    } : undefined}
  >
    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-black/[0.06] dark:from-white/[0.08] to-transparent" />
    <Icon size={18} className="relative text-black/65 dark:text-white/65" />
  </Gsap.div>
);

// === MAIN COMPONENT ===
const HeroSection = memo(function HeroSection({ isRevealed = true }) {
  const containerRef = useRef(null);
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';
  // Grid/pattern line color — black in light mode, white in dark mode
  const gridLine = isDark ? '#fff' : '#000';
  const plusFill = isDark ? '%23ffffff' : '%23000000';
  const reduceMotion = useGsapReducedMotion();
  const [enableParallax, setEnableParallax] = useState(false);
  const [enableAmbientMotion, setEnableAmbientMotion] = useState(false);
  const [showCvPreview, setShowCvPreview] = useState(false);

  // Lock body scroll + pause Lenis while CV preview is open
  useEffect(() => {
    if (!showCvPreview) return;

    const onKeyDown = (e) => {
      if (e.key === 'Escape') setShowCvPreview(false);
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    if (window.lenisInstance) window.lenisInstance.stop();

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKeyDown);
      if (window.lenisInstance) window.lenisInstance.start();
    };
  }, [showCvPreview]);

  const { scrollYProgress } = useGsapScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Subtle scroll parallax
  const bgY = useGsapTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const contentY = useGsapTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  // Pause hero ambient motion while the CV preview modal is open to free up resources.
  const ambientActive = enableAmbientMotion && !showCvPreview;

  useEffect(() => {
    if (typeof window === 'undefined' || reduceMotion) {
      setEnableParallax(false);
      setEnableAmbientMotion(false);
      return;
    }

    const parallaxMedia = window.matchMedia('(min-width: 1024px) and (hover: hover) and (pointer: fine)');
    const updateParallax = () => {
      setEnableParallax(parallaxMedia.matches);
      setEnableAmbientMotion(parallaxMedia.matches);
    };

    updateParallax();

    if (parallaxMedia.addEventListener) {
      parallaxMedia.addEventListener('change', updateParallax);
    } else {
      parallaxMedia.addListener(updateParallax);
    }

    return () => {
      if (parallaxMedia.removeEventListener) {
        parallaxMedia.removeEventListener('change', updateParallax);
      } else {
        parallaxMedia.removeListener(updateParallax);
      }
    };
  }, [reduceMotion]);

  return (
    <header
      ref={containerRef}
      id="hero-section"
      className="min-h-[100svh] w-full relative bg-[#FAF9F6] dark:bg-[#0A0A0A] overflow-hidden flex flex-col items-center justify-center pt-16 pb-20 md:pb-28 transition-colors duration-500"
    >
      {/* ── BACKGROUND ENGINEERING Grid & Dynamic Glow ── */}
      <Gsap.div
        initial={false}
        animate={isRevealed ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={enableParallax ? { y: bgY } : undefined}
        className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center"
      >

        {/* 1. Base Moving Grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(to right, ${gridLine} 1px, transparent 1px), linear-gradient(to bottom, ${gridLine} 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            ...(ambientActive && isRevealed ? { animation: 'hero-grid-scroll 14s linear infinite' } : {}),
          }}
        />

        {/* 2. Plus/Cross Pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M40 38v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4z' fill='${plusFill}' fill-opacity='1' fill-rule='nonzero'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundPosition: 'center center'
          }}
        />

        {/* 4. Radial Vignette to blend gracefully with section edges */}
        <div className="absolute inset-0 bg-[#FAF9F6] dark:bg-[#0A0A0A] [mask-image:radial-gradient(circle_at_center,transparent_0%,black_100%)] opacity-75" />

        {/* Soft bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#FAF9F6] dark:from-[#0A0A0A] to-transparent pointer-events-none" />
      </Gsap.div>

      {/* ── MAIN CONTENT (PERFECTLY CENTERED) ── */}
      {/* Parallax wrapper (scroll-driven y only) */}
      <Gsap.div
        style={enableParallax ? { y: contentY } : undefined}
        className="relative z-10 w-full max-w-[1200px] px-5 sm:px-6 md:px-12 flex flex-col items-center text-center mt-8"
      >
        {/* Iris reveal + entrance wrapper */}
        <Gsap.div
          initial={false}
          animate={isRevealed
            ? { opacity: 1, y: 0, filter: 'blur(0px)', clipPath: 'circle(150% at 50% 100%)' }
            : { opacity: 0, y: 14, filter: 'blur(3px)', clipPath: 'circle(0% at 50% 100%)' }
          }
          transition={{
            clipPath: { duration: 1.25, ease: [0.2, 0.95, 0.3, 1] },
            opacity: { duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] },
            y: { duration: 1.0, delay: 0.08, ease: [0.22, 1, 0.36, 1] },
            filter: { duration: 0.8, delay: 0.1 },
          }}
          className="w-full flex flex-col items-center"
        >

        {/* Location & Time — visible at top */}
        <Gsap.div
          initial={false}
          animate={isRevealed ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.55, duration: 0.8 }}
          className="mb-3 md:mb-4"
        >
          <LocationTimeBadge />
        </Gsap.div>

        {/* 2. Massive Clear Typography */}
        <div className="flex flex-col items-center justify-center relative w-full mb-4 md:mb-5">
          {/* Left Decoration */}
          <OrbitingDecoration icon={Code2} delay={0.15} className="left-0 sm:left-2 lg:left-16 top-2" isRevealed={isRevealed} enableAmbientMotion={ambientActive} />
          <OrbitingDecoration icon={Terminal} delay={0.45} className="left-6 sm:left-12 lg:left-28 bottom-8 hidden sm:flex" isRevealed={isRevealed} enableAmbientMotion={ambientActive} />

          <Gsap.h1
            initial={false}
            animate={isRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(4.25rem,14vw,9rem)] font-black uppercase tracking-tight text-black dark:text-white leading-[0.88]"
          >
            MALVIN
          </Gsap.h1>

          <Gsap.h1
            initial={false}
            animate={isRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
            transition={{ duration: 0.75, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(4.25rem,14vw,9rem)] font-black uppercase tracking-tight text-transparent dark:text-white leading-[0.88] mt-2 sm:mt-0 font-outline-fallback dark:font-outline-none"
          >
            RADITYA
          </Gsap.h1>

          {/* Right Decoration */}
          <OrbitingDecoration icon={Server} delay={0.28} className="right-0 sm:right-2 lg:right-16 top-10" isRevealed={isRevealed} enableAmbientMotion={ambientActive} />
          <OrbitingDecoration icon={Cpu} delay={0.58} className="right-6 sm:right-12 lg:right-28 -bottom-2 hidden sm:flex" isRevealed={isRevealed} enableAmbientMotion={ambientActive} />
        </div>

        {/* 3. Clean Slogan with Green Accent */}
        <Gsap.div
          initial={false}
          animate={isRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.38, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center gap-2 mt-0"
        >
          <h2 className="text-[clamp(1.35rem,4.2vw,2.25rem)] font-bold text-black/80 dark:text-white/80 tracking-tight flex items-center justify-center flex-wrap gap-2 px-2">
            Architecting Intelligent Systems<span className="font-extrabold -ml-1">.</span>
          </h2>
          <p className="font-sans text-base text-black/60 dark:text-white/55 max-w-xl leading-7 mt-2 px-4">
            AI Engineer & Full-Stack Developer building scalable products, from model to interface.
          </p>
        </Gsap.div>

        {/* 4. CTA Buttons */}
        <Gsap.div
          initial={false}
          animate={isRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ delay: 0.5, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap items-center justify-center gap-4 mt-5"
        >
          <button
            onClick={() => document.getElementById('project-section')?.scrollIntoView({ behavior: 'smooth' })}
            className="group flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black px-6 py-3 font-mono text-sm font-bold uppercase tracking-wider hover:bg-black/80 dark:hover:bg-white/80 transition-all duration-300 cursor-pointer"
          >
            View Projects <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
          <button
            onClick={() => setShowCvPreview(true)}
            className="group flex items-center gap-2 bg-transparent text-black dark:text-white border-2 border-black dark:border-white px-6 py-3 font-mono text-sm font-bold uppercase tracking-wider hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 cursor-pointer"
          >
            View CV <Download size={16} className="group-hover:translate-y-0.5 transition-transform" />
          </button>
        </Gsap.div>



        </Gsap.div>

      </Gsap.div>

      {/* === CV PREVIEW MODAL === */}
      {showCvPreview && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label="CV Preview"
          onClick={() => setShowCvPreview(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80" />

          {/* Panel */}
          <div
            data-lenis-prevent
            className="relative z-10 flex flex-col w-full max-w-3xl h-[85vh] bg-white dark:bg-neutral-900 border border-black/10 dark:border-white/10 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header bar */}
            <div className="flex items-center justify-between gap-3 px-4 sm:px-5 py-3 border-b border-black/10 dark:border-white/10 shrink-0">
              <span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-black dark:text-white truncate">
                Malvin Raditya - CV
              </span>
              <div className="flex items-center gap-2 shrink-0">
                <a
                  href="/Malvin-Raditya-CV.pdf"
                  download="Malvin-Raditya-CV.pdf"
                  className="group flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider hover:bg-black/80 dark:hover:bg-white/80 transition-all duration-300"
                >
                  Download <Download size={14} className="group-hover:translate-y-0.5 transition-transform" />
                </a>
                <button
                  onClick={() => setShowCvPreview(false)}
                  aria-label="Close preview"
                  className="flex items-center justify-center p-2 text-black dark:text-white border border-black/15 dark:border-white/15 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-200 cursor-pointer"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* CV preview image (WebP) — fast, responsive, crystal sharp, works across all mobile & desktop browsers */}
            <div
              data-lenis-prevent
              className="flex-1 min-h-0 w-full bg-neutral-100 dark:bg-neutral-800/80 overflow-y-auto overscroll-contain p-3 sm:p-6 flex justify-center"
            >
              <div className="max-w-2xl w-full flex flex-col items-center">
                <img
                  src="/Malvin-Raditya-CV.webp"
                  alt="Malvin Raditya - CV Preview"
                  className="w-full h-auto shadow-2xl rounded-sm border border-black/10 dark:border-white/10 select-none"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
});

export default HeroSection;

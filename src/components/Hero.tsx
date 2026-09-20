"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import {
  Apple,
  PlayCircle,
  ArrowRight,
  ArrowLeft,
  Users,
  Zap,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { Container } from "./Container";
import { PhoneMockup } from "./PhoneMockup";
import { cn } from "@/lib/utils";

const SLIDES = [
  {
    photo: "/people/nurse.jpg",
    focus: "object-[78%_20%]",
    eyebrow: "Real people · Real value",
    headline: "Your stock.",
    highlight: "Set by the people.",
    body: "Every hour, set your own stock value — or let Auto Stock set it for you. No charts. No guesswork. Just people, setting stock, together.",
  },
  {
    photo: "/people/trader.jpg",
    focus: "object-[72%_15%]",
    eyebrow: "24 rounds, every single day",
    headline: "Stay close.",
    highlight: "Earn more.",
    body: "The nearer your stock value lands to the People’s Hourly Stock Value, the more you earn — and you never lose your spot.",
  },
  {
    photo: "/people/farmer.jpg",
    focus: "object-[65%_15%]",
    eyebrow: "Built for Nigerians · Powered by the people",
    headline: "Farmers. Nurses.",
    highlight: "Traders. Everyone.",
    body: "From the market to the clinic, thousands of Nigerians set their stock value every hour and grow together.",
  },
  {
    photo: "/people/entrepreneur.jpg",
    focus: "object-[75%_20%]",
    eyebrow: "Instant, every hour",
    headline: "Cash out,",
    highlight: "instantly.",
    body: "When the round settles, your earnings land immediately — straight to your wallet. No waiting, no hidden math.",
  },
];

const FEATURE_BAR = [
  { icon: Users, tone: "primary" as const, title: "Community Driven", body: "Real people. Real value." },
  { icon: Zap, tone: "warning" as const, title: "Instant Payouts", body: "Fast and reliable." },
  { icon: ShieldCheck, tone: "blue" as const, title: "Secure & Trusted", body: "Your data, our priority." },
  { icon: TrendingUp, tone: "purple" as const, title: "Grow Together", body: "More people. More opportunities." },
];

const TONE_CLASSES: Record<string, string> = {
  primary: "bg-primary-tint text-primary",
  blue: "bg-blue-tint text-blue",
  purple: "bg-purple-tint text-purple",
  warning: "bg-warning-tint text-warning",
};

const AUTOPLAY_MS = 3000;

const textVariants: Variants = {
  enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 28 : -28 }),
  center: { opacity: 1, x: 0 },
  exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -28 : 28 }),
};

const photoVariants: Variants = {
  enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? "10%" : "-10%", scale: 1.06 }),
  center: { opacity: 1, x: "0%", scale: 1 },
  exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? "-10%" : "10%", scale: 1.06 }),
};

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const [[index, direction], setSlide] = useState<[number, number]>([0, 1]);
  const [paused, setPaused] = useState(false);
  const slide = SLIDES[index];

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setSlide(([i]) => [(i + 1) % SLIDES.length, 1]);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused]);

  function goTo(next: number) {
    setSlide(([i]) => [next, next > i || (i === SLIDES.length - 1 && next === 0) ? 1 : -1]);
  }

  function step(delta: 1 | -1) {
    setSlide(([i]) => [(i + delta + SLIDES.length) % SLIDES.length, delta]);
  }

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-20"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* desktop: full-bleed photo behind everything, text protected by a left-side gradient */}
      <div className="absolute inset-0 -z-20 hidden overflow-hidden bg-bg lg:block">
        <AnimatePresence initial={false} custom={direction} mode="sync">
          <motion.div
            key={slide.photo}
            custom={direction}
            variants={photoVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: shouldReduceMotion ? 0.01 : 0.7, ease: [0.32, 0.72, 0, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={slide.photo}
              alt=""
              fill
              priority={index === 0}
              quality={90}
              sizes="100vw"
              className={cn("object-cover", slide.focus)}
            />
          </motion.div>
        </AnimatePresence>
        {/* legibility gradient — kept light so the photo reads bright and sharp */}
        <div className="absolute inset-0 bg-gradient-to-r from-bg/85 via-bg/35 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-bg to-transparent" />
      </div>

      <Container className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
        {/* mobile/tablet: contained photo panel, full color, no overlay */}
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-white/10 shadow-[0_25px_60px_-20px_rgba(0,0,0,0.6)] sm:aspect-[16/9] lg:hidden">
          <AnimatePresence initial={false} custom={direction} mode="sync">
            <motion.div
              key={slide.photo}
              custom={direction}
              variants={photoVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: shouldReduceMotion ? 0.01 : 0.7, ease: [0.32, 0.72, 0, 1] }}
              className="absolute inset-0"
            >
              <Image
                src={slide.photo}
                alt={slide.headline}
                fill
                priority={index === 0}
                quality={90}
                sizes="100vw"
                className={cn("object-cover", slide.focus)}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <div>
          <div className="relative min-h-[19rem] sm:min-h-[16rem] lg:min-h-[15rem]">
            <AnimatePresence initial={false} custom={direction} mode="sync">
              <motion.div
                key={index}
                custom={direction}
                variants={textVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: shouldReduceMotion ? 0.01 : 0.5, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary-tint px-4 py-1.5 text-xs font-semibold tracking-wide text-primary">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
                  </span>
                  {slide.eyebrow.toUpperCase()}
                </div>

                <h1 className="mt-6 text-balance font-display text-4xl font-bold leading-[1.05] tracking-tight text-text sm:text-5xl lg:text-[3.4rem]">
                  {slide.headline}
                  <br />
                  <span className="text-primary">{slide.highlight}</span>
                </h1>

                <p className="mt-6 max-w-lg text-balance text-lg leading-relaxed text-text-muted">
                  {slide.body}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#download"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-on-primary transition-transform hover:scale-[1.03] active:scale-[0.98]"
            >
              <Apple size={17} />
              Download on iOS
            </a>
            <a
              href="#download"
              className="inline-flex items-center gap-2 rounded-full border border-border-light bg-surface px-6 py-3.5 text-sm font-semibold text-text transition-colors hover:border-primary/40 hover:bg-surface-alt"
            >
              <PlayCircle size={17} />
              Get it on Android
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-1.5 px-2 py-3.5 text-sm font-semibold text-text-muted transition-colors hover:text-text"
            >
              See how it works
              <ArrowRight size={15} />
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <button
              type="button"
              aria-label="Previous slide"
              onClick={() => step(-1)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border-light bg-surface text-text-muted transition-colors hover:border-primary/40 hover:text-text"
            >
              <ArrowLeft size={15} />
            </button>
            <div className="flex items-center gap-2">
              {SLIDES.map((s, i) => (
                <button
                  key={s.photo}
                  type="button"
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => goTo(i)}
                  className={cn(
                    "h-1.5 rounded-full transition-all",
                    i === index ? "w-6 bg-primary" : "w-1.5 bg-border-light hover:bg-text-dim"
                  )}
                />
              ))}
            </div>
            <button
              type="button"
              aria-label="Next slide"
              onClick={() => step(1)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border-light bg-surface text-text-muted transition-colors hover:border-primary/40 hover:text-text"
            >
              <ArrowRight size={15} />
            </button>
          </div>
        </div>

        <div className="relative">
          <PhoneMockup />
        </div>
      </Container>

      <Container className="mt-16 sm:mt-20">
        <div className="grid grid-cols-2 gap-6 rounded-3xl border border-border bg-surface/60 p-6 backdrop-blur sm:grid-cols-4 sm:p-8">
          {FEATURE_BAR.map((item) => (
            <div key={item.title} className="flex flex-col items-start gap-3">
              <div
                className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-xl",
                  TONE_CLASSES[item.tone]
                )}
              >
                <item.icon size={18} />
              </div>
              <div>
                <p className="text-sm font-bold text-text">{item.title}</p>
                <p className="mt-0.5 text-xs leading-snug text-text-dim">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

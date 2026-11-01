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
import { cn } from "@/lib/utils";

// Each slide pairs a finished poster (text is baked into the artwork, so it is
// shown whole rather than cropped) with a short caption. Swap `photo` to change
// the artwork; layout, transitions and controls pick it up automatically.
const SLIDES = [
  {
    photo: "/games/crowd-games-logo.jpg",
    square: false,
    alt: "CrowdGames logo",
    eyebrow: "Welcome to CrowdGames",
    headline: "Play together.",
    highlight: "Win together.",
    body: "CrowdGames is a community of players taking part in quick, simple games. Pick a game, join the crowd, and play.",
  },
  {
    photo: "/games/instant-win.jpg",
    square: true,
    alt: "CrowdGames Instant Win",
    eyebrow: "Instant Win",
    headline: "Guess the last digit.",
    highlight: "Win instantly.",
    body: "Hide or guess the last digit of a phone number, from 1 to 5. Quick to learn, quick to play.",
  },
  {
    photo: "/games/hide-or-guess-digit.jpg",
    square: false,
    alt: "Hide or Guess the last digit of a phone number, 1 to 5",
    eyebrow: "Hide or Guess · Phone number",
    headline: "Hide it.",
    highlight: "Or guess it.",
    body: "Choose to hide the last digit of a phone number or guess it. Every number from 1 to 5 is in play.",
  },
  {
    photo: "/games/hide-or-guess-spin.jpg",
    square: false,
    alt: "Hide or Guess a spin value, 1 to 5",
    eyebrow: "Hide or Guess · Spin value",
    headline: "Hide a spin value.",
    highlight: "Or guess one.",
    body: "Hide a spin value between 1 and 5, or guess the one your opponent hid. Guess right and you win.",
  },
  {
    photo: "/games/every-hour-autoplay.jpg",
    square: true,
    alt: "Every hour, guess the winning number between 1 and 5",
    eyebrow: "Every hour · 24 hours a day",
    headline: "A new round",
    highlight: "every hour.",
    body: "Guess the winning number between 1 and 5 each hour, or turn on AutoPlay and keep playing around the clock.",
  },
  {
    photo: "/games/double-cash.jpg",
    square: false,
    alt: "Win Double Cash: you hide a number and I guess it, or I hide a number and you guess it",
    eyebrow: "Two ways to play",
    headline: "You hide, I guess.",
    highlight: "I hide, you guess.",
    body: "Secretly choose a number between 1 and 5 and let the other player guess it, or swap roles and do the guessing.",
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

const AUTOPLAY_MS = 4000;

const textVariants: Variants = {
  enter: { opacity: 1 },
  center: { opacity: 1, transition: { staggerChildren: 0.09, delayChildren: 0.12 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const rise: Variants = {
  enter: { opacity: 0, y: 22, filter: "blur(6px)" },
  center: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.55, ease: "easeOut" } },
};

// Fade all four edges to transparent so the artwork melts into the hero.
const FEATHER = {
  WebkitMaskImage:
    "linear-gradient(to right, transparent, #000 14%, #000 86%, transparent), linear-gradient(to bottom, transparent, #000 14%, #000 86%, transparent)",
  maskImage:
    "linear-gradient(to right, transparent, #000 14%, #000 86%, transparent), linear-gradient(to bottom, transparent, #000 14%, #000 86%, transparent)",
  WebkitMaskComposite: "source-in",
  maskComposite: "intersect",
} as const;

const SPRING = { type: "spring", stiffness: 140, damping: 20, mass: 0.9 } as const;

// Signed, wrapped distance of slide `i` from the active slide (e.g. -2..3).
function offsetFrom(i: number, active: number) {
  const n = SLIDES.length;
  let d = (((i - active) % n) + n) % n;
  if (d > n / 2) d -= n;
  return d;
}

interface SwiperProps {
  index: number;
  reduced: boolean | null;
  onGo: (to: number) => void;
  onSwipe: (delta: 1 | -1) => void;
}

/**
 * Coverflow swiper: the active poster sits front and centre while its
 * neighbours peek out, tilted and faded into the hero background. Drag, click a
 * side poster, or use the controls to move between slides.
 */
function Swiper({ index, reduced, onGo, onSwipe }: SwiperProps) {
  return (
    <motion.div
      className="relative mx-auto aspect-[3/2] w-full max-w-[44rem] cursor-grab select-none active:cursor-grabbing lg:max-w-none"
      style={{ perspective: 1400 }}
      drag={reduced ? false : "x"}
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.14}
      onDragEnd={(_, info) => {
        const { offset, velocity } = info;
        if (offset.x < -60 || velocity.x < -500) onSwipe(1);
        else if (offset.x > 60 || velocity.x > 500) onSwipe(-1);
      }}
    >
      <AnimatePresence initial={false}>
        <motion.div
          key={SLIDES[index].photo}
          className="pointer-events-none absolute inset-[-8%] -z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.55 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9 }}
        >
          <Image
            src={SLIDES[index].photo}
            alt=""
            fill
            sizes="60vw"
            className="object-cover blur-3xl saturate-150"
            aria-hidden
          />
        </motion.div>
      </AnimatePresence>

      {SLIDES.map((slide, i) => {
        const o = offsetFrom(i, index);
        const abs = Math.abs(o);
        const visible = abs <= 1;
        return (
          <motion.div
            key={slide.photo}
            className="absolute inset-0 flex items-center justify-center"
            style={{ transformStyle: "preserve-3d", zIndex: 10 - abs }}
            initial={false}
            animate={{
              x: `${o * 62}%`,
              scale: 1 - abs * 0.22,
              rotateY: o * -22,
              opacity: visible ? 1 - abs * 0.45 : 0,
            }}
            transition={reduced ? { duration: 0.01 } : SPRING}
            onClick={() => o !== 0 && onGo(i)}
            aria-hidden={o !== 0}
          >
            {/* gentle idle float on the active poster only. The card takes the
                poster's own aspect (no letterbox) and every edge is feathered
                into the page, so it blends instead of reading as a box. */}
            <motion.div
              className={cn(
                "relative",
                slide.square ? "h-full aspect-square" : "w-full aspect-[3/2]"
              )}
              animate={o === 0 && !reduced ? { y: [0, -8, 0] } : { y: 0 }}
              transition={
                o === 0 && !reduced
                  ? { duration: 5, ease: "easeInOut", repeat: Infinity }
                  : { duration: 0.4 }
              }
              style={FEATHER}
            >
              <Image
                src={slide.photo}
                alt={o === 0 ? slide.alt : ""}
                fill
                priority={i === 0}
                quality={90}
                sizes="(min-width: 1024px) 55vw, 95vw"
                className="object-cover"
                draggable={false}
              />
              {o === 0 && !reduced && (
                <motion.div
                  key={`shine-${index}`}
                  className="pointer-events-none absolute inset-y-0 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                  initial={{ left: "-40%" }}
                  animate={{ left: "140%" }}
                  transition={{ duration: 1.1, delay: 0.5, ease: "easeInOut" }}
                />
              )}
            </motion.div>
          </motion.div>
        );
      })}

      {/* pagination dots */}
      <div className="absolute -bottom-9 left-1/2 flex -translate-x-1/2 gap-2">
        {SLIDES.map((s, i) => (
          <button
            key={s.photo}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => onGo(i)}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              i === index ? "w-6 bg-primary" : "w-1.5 bg-white/25 hover:bg-white/50"
            )}
          />
        ))}
      </div>
    </motion.div>
  );
}

const COINS = [
  { left: "6%", top: "18%", size: 26, delay: 0, dur: 7 },
  { left: "44%", top: "8%", size: 18, delay: 1.2, dur: 6 },
  { left: "88%", top: "22%", size: 30, delay: 0.6, dur: 8 },
  { left: "94%", top: "62%", size: 20, delay: 2, dur: 6.5 },
  { left: "52%", top: "78%", size: 24, delay: 1.8, dur: 7.5 },
  { left: "3%", top: "70%", size: 20, delay: 2.6, dur: 6 },
];

/** Ambient backdrop: drifting colour glows and floating ₦ coins that blend the poster into the section. */
function HeroBackdrop({ reduced }: { reduced: boolean | null }) {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden>
      <motion.div
        className="absolute -right-24 top-10 h-[34rem] w-[34rem] rounded-full bg-primary/25 blur-[110px]"
        animate={reduced ? undefined : { scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 8, ease: "easeInOut", repeat: Infinity }}
      />
      <motion.div
        className="absolute left-[30%] top-[45%] h-80 w-80 rounded-full bg-warning/15 blur-[100px]"
        animate={reduced ? undefined : { x: [0, 60, 0], y: [0, -30, 0] }}
        transition={{ duration: 11, ease: "easeInOut", repeat: Infinity }}
      />
      <motion.div
        className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-purple/15 blur-[100px]"
        animate={reduced ? undefined : { x: [0, 40, 0], y: [0, 40, 0] }}
        transition={{ duration: 13, ease: "easeInOut", repeat: Infinity }}
      />
      {!reduced &&
        COINS.map((c, i) => (
          <motion.span
            key={i}
            className="absolute flex items-center justify-center rounded-full border border-warning/40 bg-warning/15 font-bold text-warning shadow-[0_0_18px_rgba(251,191,36,0.35)]"
            style={{ left: c.left, top: c.top, width: c.size, height: c.size, fontSize: c.size * 0.55 }}
            animate={{ y: [0, -26, 0], rotate: [0, 18, -12, 0], opacity: [0.5, 0.95, 0.5] }}
            transition={{ duration: c.dur, delay: c.delay, ease: "easeInOut", repeat: Infinity }}
          >
            ₦
          </motion.span>
        ))}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-bg to-transparent" />
    </div>
  );
}

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const [[index, direction], setSlide] = useState<[number, number]>([0, 1]);
  const slide = SLIDES[index];

  // Advances on its own; depending on `index` restarts the timer after any
  // manual swipe/click so a slide always gets its full time on screen.
  useEffect(() => {
    const id = setTimeout(() => {
      setSlide(([i]) => [(i + 1) % SLIDES.length, 1]);
    }, AUTOPLAY_MS);
    return () => clearTimeout(id);
  }, [index]);

  function go(to: number) {
    setSlide(([i]) => [to, to >= i ? 1 : -1]);
  }

  function step(delta: 1 | -1) {
    setSlide(([i]) => [(i + delta + SLIDES.length) % SLIDES.length, delta]);
  }

  const current = String(index + 1).padStart(2, "0");
  const total = String(SLIDES.length).padStart(2, "0");

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-24 pb-12 sm:pt-28 sm:pb-16"
    >
      <HeroBackdrop reduced={shouldReduceMotion} />

      <Container className="grid items-center gap-16 lg:grid-cols-[0.78fr_1.22fr] lg:gap-6">
        <div
          className="min-w-0 overflow-hidden pb-12 lg:order-2"
          style={{
            WebkitMaskImage: "linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent)",
            maskImage: "linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent)",
          }}
        >
          <Swiper index={index} reduced={shouldReduceMotion} onGo={go} onSwipe={step} />
        </div>

        <div className="lg:order-1">
          <div className="relative min-h-[19rem] sm:min-h-[16rem] lg:min-h-[19rem]">
            <AnimatePresence initial={false} custom={direction} mode="sync">
              <motion.div
                key={index}
                custom={direction}
                variants={textVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0"
              >
                <motion.div
                  variants={rise}
                  className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary-tint px-4 py-1.5 text-xs font-semibold tracking-wide text-primary">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
                  </span>
                  {slide.eyebrow.toUpperCase()}
                </motion.div>

                <motion.h1 variants={rise} className="mt-6 text-balance font-display text-4xl font-bold leading-[1.05] tracking-tight text-text sm:text-5xl lg:text-[3rem]">
                  {slide.headline}
                  <br />
                  <span className="bg-gradient-to-r from-primary via-primary-light to-warning bg-clip-text text-transparent">
                    {slide.highlight}
                  </span>
                </motion.h1>

                <motion.p variants={rise} className="mt-6 max-w-lg text-balance text-lg leading-relaxed text-text-muted">
                  {slide.body}
                </motion.p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#download"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-on-primary shadow-[0_12px_30px_-12px_rgba(16,185,129,0.7)] transition-transform hover:scale-[1.03] active:scale-[0.98]"
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

          {/* Swipe rail — prev/next, live autoplay progress, counter */}
          <div className="mt-9 flex items-center gap-4">
            <button
              type="button"
              aria-label="Previous slide"
              onClick={() => step(-1)}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-text-muted backdrop-blur transition-colors hover:border-primary/40 hover:bg-white/10 hover:text-text"
            >
              <ArrowLeft size={16} />
            </button>

            <div className="flex flex-1 items-center gap-3">
              <span className="text-xs font-bold tabular-nums text-text">{current}</span>
              <div className="relative h-px flex-1 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  key={`${index}-progress`}
                  className="absolute inset-y-0 left-0 bg-primary"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{
                    duration: AUTOPLAY_MS / 1000,
                    ease: "linear",
                  }}
                />
              </div>
              <span className="text-xs font-bold tabular-nums text-text-dim">{total}</span>
            </div>

            <button
              type="button"
              aria-label="Next slide"
              onClick={() => step(1)}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-text-muted backdrop-blur transition-colors hover:border-primary/40 hover:bg-white/10 hover:text-text"
            >
              <ArrowRight size={16} />
            </button>
          </div>
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

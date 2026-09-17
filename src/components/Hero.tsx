"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Apple, PlayCircle, ArrowRight } from "lucide-react";
import { Container } from "./Container";
import { PhoneMockup } from "./PhoneMockup";
import { Reveal } from "./Reveal";

const STATS = [
  { value: "24", label: "Stock rounds, every hour" },
  { value: "60", label: "Minutes per round cycle" },
  { value: "₦", label: "Instant wallet payouts" },
];

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black_10%,transparent_70%)]" />
      <div className="pointer-events-none absolute left-1/2 top-[-10rem] -z-10 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-primary/15 blur-[140px]" />

      <Container className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
        <div>
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary-tint px-4 py-1.5 text-xs font-semibold tracking-wide text-primary"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
            IT&apos;S A STOCK SET BY PEOPLE
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-6 text-balance font-display text-4xl font-bold leading-[1.05] tracking-tight text-text sm:text-5xl lg:text-[3.4rem]"
          >
            Your stock.
            <br />
            <span className="text-primary">Set by the people.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-6 max-w-lg text-balance text-lg leading-relaxed text-text-muted"
          >
            Every hour, set your own stock value — or let Auto Stock set it
            for you. The closer you land to the People&apos;s Hourly Stock
            Value, the more you earn. No charts. No guesswork. Just people,
            setting stock, together.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
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
          </motion.div>

          <Reveal delay={0.25} className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-8">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-2xl font-bold text-text sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs leading-snug text-text-dim">
                  {stat.label}
                </p>
              </div>
            ))}
          </Reveal>
        </div>

        <Reveal delay={0.2} y={30} className="relative">
          <PhoneMockup />
        </Reveal>
      </Container>
    </section>
  );
}

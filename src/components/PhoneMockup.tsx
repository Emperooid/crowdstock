"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Bell,
  Flame,
  Home,
  LineChart,
  TrendingUp,
  Wallet,
  Users,
  Zap,
  ChevronRight,
} from "lucide-react";

const ROUNDS = [
  { index: 14, time: "2:00 PM – 2:50 PM", status: "Open", tone: "primary" as const },
  { index: 15, time: "3:00 PM – 3:50 PM", status: "Upcoming", tone: "neutral" as const },
  { index: 16, time: "4:00 PM – 4:50 PM", status: "Upcoming", tone: "neutral" as const },
];

const TONE_CLASSES: Record<string, string> = {
  primary: "bg-primary-tint text-primary",
  neutral: "bg-white/8 text-text-muted",
};

export function PhoneMockup() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className="relative mx-auto w-[300px] sm:w-[320px]"
      animate={shouldReduceMotion ? undefined : { y: [0, -14, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* glow */}
      <div className="absolute -inset-10 -z-10 rounded-[3rem] bg-primary/20 blur-[80px]" />

      <div className="relative rounded-[2.6rem] border border-white/10 bg-[#05090a] p-2.5 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.8)]">
        <div className="relative aspect-[9/19.2] w-full overflow-hidden rounded-[2.1rem] bg-bg-soft">
          {/* notch */}
          <div className="absolute left-1/2 top-2 z-20 h-5 w-24 -translate-x-1/2 rounded-full bg-[#05090a]" />

          <div className="flex h-full flex-col overflow-hidden px-4 pb-4 pt-9 text-[11px]">
            {/* header */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[9px] font-semibold tracking-wider text-text-dim">
                  WELCOME BACK
                </p>
                <p className="font-display text-base font-bold text-text">Tomi</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="relative flex h-7 w-7 items-center justify-center rounded-full bg-surface-alt">
                  <Bell size={13} className="text-text" />
                  <span className="absolute right-1 top-1 h-1.5 w-1.5 rounded-full bg-danger" />
                </div>
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-on-primary">
                  T
                </div>
              </div>
            </div>

            {/* balance card */}
            <div className="mt-3 rounded-2xl border border-white/5 bg-surface p-3.5">
              <div className="flex items-center justify-between">
                <p className="text-text-muted">Your Balance</p>
                <div className="flex items-center gap-1 rounded-full bg-primary-tint px-2 py-0.5">
                  <TrendingUp size={10} className="text-primary" />
                  <span className="text-[9px] font-bold text-primary">+3.42%</span>
                </div>
              </div>
              <p className="mt-1 font-display text-2xl font-extrabold tracking-tight text-text">
                ₦128,450.00
              </p>
              <p className="mt-0.5 text-[10px] font-semibold text-primary">
                +₦4,210.00 today
              </p>
            </div>

            {/* countdown */}
            <div className="mt-3 flex items-center justify-between rounded-full border border-primary/25 bg-primary-tint px-3 py-2">
              <div className="flex items-center gap-1.5">
                <Flame size={12} className="text-primary" />
                <span className="text-[10px] font-semibold text-text">
                  Round 14 closes in
                </span>
              </div>
              <span className="font-display text-[11px] font-bold tabular-nums text-primary">
                00:22:14
              </span>
            </div>

            {/* CTA card */}
            <div className="mt-3 rounded-2xl bg-surface p-3.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary">
                <Zap size={15} className="text-on-primary" />
              </div>
              <p className="mt-2 text-[11px] font-bold text-text">
                Round 14 is open
              </p>
              <p className="mt-0.5 text-[10px] leading-snug text-text-muted">
                Submit your pick before 2:50 PM.
              </p>
              <div className="mt-2 inline-flex items-center rounded-full bg-primary px-3 py-1.5 text-[10px] font-bold text-on-primary">
                Pick Stock Now
              </div>
            </div>

            {/* today's rounds */}
            <div className="mt-4 flex items-center justify-between">
              <p className="text-[11px] font-bold text-text">Today&apos;s Rounds</p>
              <div className="flex items-center gap-0.5 text-primary">
                <span className="text-[9px] font-bold">View All</span>
                <ChevronRight size={10} />
              </div>
            </div>

            <div className="mt-2 flex flex-1 flex-col gap-2 overflow-hidden">
              {ROUNDS.map((round) => (
                <div
                  key={round.index}
                  className="flex items-center gap-2 rounded-xl bg-surface px-2.5 py-2"
                >
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-primary-tint text-[10px] font-bold text-primary">
                    {round.index}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[10px] font-semibold text-text">
                      Round {round.index}
                    </p>
                    <p className="truncate text-[9px] text-text-dim">{round.time}</p>
                  </div>
                  <span
                    className={`shrink-0 rounded-full px-2 py-0.5 text-[8px] font-bold ${TONE_CLASSES[round.tone]}`}
                  >
                    {round.status}
                  </span>
                </div>
              ))}
            </div>

            {/* tab bar */}
            <div className="mt-3 flex items-center justify-between rounded-2xl border border-white/5 bg-surface px-4 py-2.5">
              <Home size={15} className="text-primary" />
              <LineChart size={15} className="text-text-dim" />
              <div className="-mt-6 flex h-10 w-10 items-center justify-center rounded-full bg-primary shadow-lg shadow-primary/30">
                <Zap size={16} className="text-on-primary" />
              </div>
              <Wallet size={15} className="text-text-dim" />
              <Users size={15} className="text-text-dim" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

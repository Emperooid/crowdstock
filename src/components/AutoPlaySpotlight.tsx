"use client";

import { Zap, Check } from "lucide-react";
import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

const SLOTS = [
  { round: 9, time: "9:00 AM", amount: "₦500", on: true },
  { round: 13, time: "1:00 PM", amount: "₦500", on: true },
  { round: 18, time: "6:00 PM", amount: "₦1,000", on: true },
  { round: 21, time: "9:00 PM", amount: "₦500", on: false },
];

const POINTS = [
  "Pick one figure for every round, or set a different one per hour",
  "Rounds you've enabled play automatically the moment they open",
  "Turn any single round on or off without touching the rest",
];

export function AutoPlaySpotlight() {
  return (
    <section className="relative py-24 sm:py-32">
      <Container className="grid items-center gap-16 lg:grid-cols-2 lg:gap-8">
        <Reveal y={30} className="order-2 lg:order-1">
          <div className="relative mx-auto max-w-sm rounded-3xl border border-border bg-surface p-6 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)]">
            <div className="flex items-center justify-between rounded-2xl bg-primary-tint px-4 py-3.5">
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary">
                  <Zap size={15} className="text-on-primary" />
                </div>
                <div>
                  <p className="text-sm font-bold text-text">Auto Play</p>
                  <p className="text-[11px] text-text-muted">3 of 24 rounds enabled</p>
                </div>
              </div>
              <div className="flex h-6 w-11 items-center rounded-full bg-primary p-0.5">
                <div className="ml-auto h-5 w-5 rounded-full bg-white" />
              </div>
            </div>

            <div className="mt-4 flex flex-col gap-2">
              {SLOTS.map((slot) => (
                <div
                  key={slot.round}
                  className="flex items-center gap-3 rounded-xl bg-surface-alt px-3.5 py-3"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5 text-xs font-bold text-text-muted">
                    {slot.round}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold text-text">
                      Round {slot.round} · {slot.time}
                    </p>
                    <p className="text-[11px] text-text-dim">Stake {slot.amount}</p>
                  </div>
                  <div
                    className={cn(
                      "flex h-5 w-9 shrink-0 items-center rounded-full p-0.5 transition-colors",
                      slot.on ? "bg-primary" : "bg-white/10"
                    )}
                  >
                    <div
                      className={cn(
                        "h-4 w-4 rounded-full bg-white transition-transform",
                        slot.on ? "ml-auto" : ""
                      )}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Auto Play
            </p>
            <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight text-text sm:text-4xl">
              Set it once. Let it play every hour.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-text-muted">
              You don&apos;t have to be watching the clock 24 times a day.
              Auto Play submits your figure the instant a round opens, so you
              never miss a cycle.
            </p>

            <ul className="mt-8 flex flex-col gap-4">
              {POINTS.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-tint text-primary">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  <span className="text-sm leading-relaxed text-text-muted">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

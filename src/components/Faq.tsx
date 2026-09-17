"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

const FAQS = [
  {
    q: "What exactly is CrowdStock?",
    a: "CrowdStock is a stock set by the people. Each round, you set a fixed amount and a stock value. When the round settles, everyone's values combine into the People's Hourly Stock Value, and how much you earn depends on how close your value was to it.",
  },
  {
    q: "How many rounds run per day?",
    a: "24 — one every hour, around the clock. Round 0 opens at midnight and Round 23 opens at 11PM. Each round stays open for 50 minutes before it settles.",
  },
  {
    q: "Can I change my stock value after I submit it?",
    a: "No. Once you set a stock value for a round, it's locked in until that round settles. You can, however, set your value for any other open round today in advance.",
  },
  {
    q: "What is Auto Stock?",
    a: "Auto Stock sets your chosen figure automatically the moment a round opens, for every round you've enabled — so you don't have to be watching the clock all day.",
  },
  {
    q: "Can I lose money?",
    a: "You always keep your spot in the round. How much you earn simply depends on how close your stock value lands to the People's Hourly Stock Value that hour — the closer you are, the more you earn.",
  },
  {
    q: "How do withdrawals work?",
    a: "Link a verified bank account in the app, then request a payout from your wallet balance whenever you want. Your transaction history shows every deposit, stock round, and withdrawal.",
  },
  {
    q: "Is my account secure?",
    a: "Yes. CrowdStock supports biometric app lock and stores credentials in encrypted on-device storage, so your wallet stays protected even if your phone ends up in someone else's hands.",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <Container className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            FAQ
          </p>
          <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight text-text sm:text-4xl">
            Questions, answered.
          </h2>
          <p className="mt-4 text-text-muted">
            Can&apos;t find what you&apos;re looking for? Reach out once
            you&apos;re in the app — support is a tap away from the home
            screen.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="flex flex-col divide-y divide-border rounded-3xl border border-border bg-surface px-1">
          {FAQS.map((item, i) => {
            const open = openIndex === i;
            return (
              <div key={item.q} className="px-5 py-2 sm:px-6">
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-4 text-left"
                  aria-expanded={open}
                >
                  <span className="font-display text-base font-semibold text-text">
                    {item.q}
                  </span>
                  <Plus
                    size={18}
                    className={cn(
                      "shrink-0 text-primary transition-transform duration-300",
                      open && "rotate-45"
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out",
                    open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="pb-5 text-sm leading-relaxed text-text-muted">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </Reveal>
      </Container>
    </section>
  );
}

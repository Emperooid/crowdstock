"use client";

import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

type Status = "settled" | "open" | "awaiting" | "upcoming";

const STATUS_META: Record<Status, { label: string; dot: string; text: string; bg: string }> = {
  settled: { label: "Settled", dot: "bg-blue", text: "text-blue", bg: "bg-blue-tint" },
  open: { label: "Open", dot: "bg-primary", text: "text-primary", bg: "bg-primary-tint" },
  awaiting: { label: "Awaiting", dot: "bg-warning", text: "text-warning", bg: "bg-warning-tint" },
  upcoming: { label: "Upcoming", dot: "bg-text-dim", text: "text-text-muted", bg: "bg-white/5" },
};

// 24 rounds a day, one per hour — hour 14 (2 PM) is "now" for this illustration.
const NOW_HOUR = 14;

function statusFor(hour: number): Status {
  if (hour < NOW_HOUR) return "settled";
  if (hour === NOW_HOUR) return "open";
  if (hour === NOW_HOUR + 1) return "awaiting";
  return "upcoming";
}

function formatHour(h: number, minute = 0) {
  const period = h >= 12 ? "PM" : "AM";
  const hour12 = h % 12 === 0 ? 12 : h % 12;
  return minute === 0 ? `${hour12}${period}` : `${hour12}:${String(minute).padStart(2, "0")}${period}`;
}

const FEATURED = [11, 13, 14, 15].map((hour) => ({
  hour,
  status: statusFor(hour),
}));

export function RoundsPreview() {
  return (
    <section id="rounds" className="relative py-24 sm:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Round schedule
            </p>
            <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight text-text sm:text-4xl">
              24 rounds. Every hour, all day.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-text-muted">
              Round 0 opens at midnight, Round 23 opens at 11PM — each one
              stays open for 50 minutes before it settles against the
              People&apos;s Hourly Stock Value. Miss one, catch the next hour.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {(Object.keys(STATUS_META) as Status[]).map((key) => (
                <div
                  key={key}
                  className={cn(
                    "flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold",
                    STATUS_META[key].bg,
                    STATUS_META[key].text
                  )}
                >
                  <span className={cn("h-1.5 w-1.5 rounded-full", STATUS_META[key].dot)} />
                  {STATUS_META[key].label}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-border bg-surface p-6 sm:p-8">
              {/* 24-hour strip */}
              <div className="flex items-end gap-[3px]">
                {Array.from({ length: 24 }, (_, hour) => {
                  const status = statusFor(hour);
                  const isNow = hour === NOW_HOUR;
                  return (
                    <div
                      key={hour}
                      className="group relative flex-1"
                      title={`Round ${hour} · ${formatHour(hour)}`}
                    >
                      <div
                        className={cn(
                          "rounded-sm transition-all",
                          STATUS_META[status].dot,
                          isNow ? "h-10 opacity-100" : "h-6 opacity-50 group-hover:opacity-90"
                        )}
                      />
                    </div>
                  );
                })}
              </div>
              <div className="mt-2 flex justify-between text-[10px] font-medium text-text-dim">
                <span>12AM</span>
                <span>6AM</span>
                <span>12PM</span>
                <span>6PM</span>
                <span>11PM</span>
              </div>

              {/* featured round cards */}
              <div className="mt-7 flex flex-col gap-2.5 border-t border-border pt-6">
                {FEATURED.map(({ hour, status }) => (
                  <div
                    key={hour}
                    className="flex items-center gap-3 rounded-xl bg-surface-alt px-3.5 py-3"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-tint text-sm font-bold text-primary">
                      {hour}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-semibold text-text">
                        Round {hour}
                      </p>
                      <p className="truncate text-xs text-text-dim">
                        {formatHour(hour)} – {formatHour(hour, 50)}
                      </p>
                    </div>
                    <span
                      className={cn(
                        "shrink-0 rounded-full px-2.5 py-1 text-[10px] font-bold",
                        STATUS_META[status].bg,
                        STATUS_META[status].text
                      )}
                    >
                      {STATUS_META[status].label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

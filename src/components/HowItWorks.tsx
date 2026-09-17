import { Target, Hourglass, Users2, Trophy } from "lucide-react";
import { Container } from "./Container";
import { Reveal, RevealGroup, RevealItem } from "./Reveal";

const STEPS = [
  {
    icon: Target,
    title: "Set your stock value",
    body: "Choose any open round today and set your stock value with your fixed amount — set it ahead for later rounds, or set the one that's live right now.",
  },
  {
    icon: Hourglass,
    title: "The round runs for 50 minutes",
    body: "Every round opens on the hour and closes 50 minutes later. Once you set it, that's it — no changing your stock value before it settles.",
  },
  {
    icon: Users2,
    title: "The People's Hourly Stock Value is set",
    body: "When the round settles, CrowdStock takes everyone's stock value that hour and sets the People's Hourly Stock Value — the number the people landed on, together.",
  },
  {
    icon: Trophy,
    title: "Closest to the People's Value earns most",
    body: "The nearer your stock value is to the People's Hourly Stock Value, the more you earn. Stay close, earn more — you never lose your spot. Simple, transparent, every hour.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 sm:py-32">
      <Container>
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            How it works
          </p>
          <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight text-text sm:text-4xl">
            Four steps. One hour cycles. Zero guesswork.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-text-muted">
            No charts to read, no companies to research. CrowdStock is stock
            value set by real people — and it resets every single hour.
          </p>
        </Reveal>

        <RevealGroup className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
          {STEPS.map((step, i) => (
            <RevealItem key={step.title}>
              <div className="group relative h-full rounded-3xl border border-border bg-surface p-6 transition-colors hover:border-primary/30">
                <span className="font-display text-4xl font-bold text-white/5 transition-colors group-hover:text-primary/15">
                  0{i + 1}
                </span>
                <div className="-mt-6 flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-tint text-primary">
                  <step.icon size={20} />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-text">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">
                  {step.body}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}

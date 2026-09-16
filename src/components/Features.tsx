import {
  Zap,
  Wallet,
  BellRing,
  Gift,
  Fingerprint,
  BarChart3,
} from "lucide-react";
import { Container } from "./Container";
import { Reveal, RevealGroup, RevealItem } from "./Reveal";

const FEATURES = [
  {
    icon: Zap,
    tone: "primary" as const,
    title: "Auto Play",
    body: "Set a figure once and let CrowdStock submit it for you across every round — or fine-tune a different pick for each hour in advance.",
  },
  {
    icon: Wallet,
    tone: "blue" as const,
    title: "Instant wallet",
    body: "Fund your balance, watch gains and losses land in real time, and request a payout to your bank account whenever you want.",
  },
  {
    icon: BellRing,
    tone: "warning" as const,
    title: "Live countdowns & alerts",
    body: "A running countdown to every round's close, plus push notifications the moment a round opens, settles, or news drops.",
  },
  {
    icon: BarChart3,
    tone: "purple" as const,
    title: "Transparent scoring",
    body: "Every result shows your pick, the crowd average, and the exact deviation between them — no hidden math, ever.",
  },
  {
    icon: Fingerprint,
    tone: "primary" as const,
    title: "Secure by design",
    body: "Biometric app lock and encrypted on-device storage keep your wallet and account protected without slowing you down.",
  },
  {
    icon: Gift,
    tone: "blue" as const,
    title: "Invite & earn",
    body: "Bring friends onto CrowdStock from your contacts or WhatsApp and earn reward credits for every person who joins and plays.",
  },
];

const TONE_CLASSES: Record<string, string> = {
  primary: "bg-primary-tint text-primary",
  blue: "bg-blue-tint text-blue",
  warning: "bg-warning-tint text-warning",
  purple: "bg-purple-tint text-purple",
};

export function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      <Container>
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Features
          </p>
          <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight text-text sm:text-4xl">
            Everything you need to play, nothing you don&apos;t.
          </h2>
        </Reveal>

        <RevealGroup className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
          {FEATURES.map((feature) => (
            <RevealItem key={feature.title}>
              <div className="h-full rounded-3xl border border-border bg-surface p-7 transition-colors hover:border-primary/30">
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-2xl ${TONE_CLASSES[feature.tone]}`}
                >
                  <feature.icon size={20} />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-text">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">
                  {feature.body}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}

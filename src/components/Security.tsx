import { Fingerprint, Lock, Landmark, Eye } from "lucide-react";
import { Container } from "./Container";
import { Reveal, RevealGroup, RevealItem } from "./Reveal";

const POINTS = [
  {
    icon: Fingerprint,
    title: "Biometric app lock",
    body: "Face or fingerprint unlock keeps your wallet closed to anyone but you.",
  },
  {
    icon: Lock,
    title: "Encrypted on-device storage",
    body: "Credentials and session data never sit in plain text on your phone.",
  },
  {
    icon: Landmark,
    title: "Verified bank payouts",
    body: "Withdrawals go straight to the bank account you've linked and confirmed.",
  },
  {
    icon: Eye,
    title: "Transparent every round",
    body: "Your pick, the crowd average, and your exact result — visible after every settle.",
  },
];

export function Security() {
  return (
    <section className="relative border-y border-border bg-surface/40 py-24 sm:py-28">
      <Container>
        <Reveal className="mx-auto max-w-xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Built to be trusted
          </p>
          <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight text-text sm:text-4xl">
            Your wallet, protected from the ground up.
          </h2>
        </Reveal>

        <RevealGroup
          className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4"
          stagger={0.08}
        >
          {POINTS.map((point) => (
            <RevealItem key={point.title} className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-tint text-primary">
                <point.icon size={22} />
              </div>
              <h3 className="mt-4 font-display text-base font-bold text-text">
                {point.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">
                {point.body}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}

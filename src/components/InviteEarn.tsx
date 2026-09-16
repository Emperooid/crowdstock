"use client";

import { Users, Ribbon, Wallet, MessageCircle, CheckCircle2 } from "lucide-react";
import { Container } from "./Container";
import { Reveal } from "./Reveal";

const CONTACTS = [
  { name: "Zainab A.", status: "joined" as const },
  { name: "Kunle O.", status: "invite" as const },
  { name: "Fatima B.", status: "invite" as const },
];

export function InviteEarn() {
  return (
    <section id="rewards" className="relative py-24 sm:py-32">
      <Container className="grid items-center gap-16 lg:grid-cols-2 lg:gap-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Invite & earn
          </p>
          <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight text-text sm:text-4xl">
            Onboard others, earn more.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-text-muted">
            Bring friends onto CrowdStock straight from your contacts or
            WhatsApp. The more people you onboard, the more reward credits
            you build toward your own payout.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <div className="flex items-center gap-2.5 rounded-2xl border border-border bg-surface px-4 py-3">
              <Users size={16} className="text-primary" />
              <span className="text-sm text-text-muted">Invite from contacts, in two taps</span>
            </div>
            <div className="flex items-center gap-2.5 rounded-2xl border border-border bg-surface px-4 py-3">
              <MessageCircle size={16} className="text-primary" />
              <span className="text-sm text-text-muted">Sent straight to WhatsApp</span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} y={30}>
          <div className="mx-auto max-w-sm rounded-3xl border border-border bg-surface p-6 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)]">
            <p className="text-sm font-bold text-text">Onboard Others, Earn More</p>
            <p className="mt-1 text-xs leading-relaxed text-text-muted">
              Earn more by bringing others to CrowdStock — the more people you
              onboard, the higher your payout gets.
            </p>

            <div className="mt-4 grid grid-cols-3 gap-2 rounded-2xl bg-primary-tint p-4">
              <StatBlock icon={Users} value="128" label="Onboarded" />
              <StatBlock icon={Ribbon} value="3,400" label="Credits" />
              <StatBlock icon={Wallet} value="₦42K" label="Payout" />
            </div>

            <div className="mt-5 flex flex-col gap-2">
              {CONTACTS.map((c) => (
                <div
                  key={c.name}
                  className="flex items-center gap-3 rounded-xl bg-surface-alt px-3.5 py-2.5"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-tint text-xs font-bold text-primary">
                    {c.name[0]}
                  </div>
                  <span className="flex-1 truncate text-xs font-semibold text-text">
                    {c.name}
                  </span>
                  {c.status === "joined" ? (
                    <span className="flex items-center gap-1 rounded-full bg-primary-tint px-2.5 py-1 text-[10px] font-bold text-primary">
                      CrowdStock
                      <CheckCircle2 size={11} />
                    </span>
                  ) : (
                    <span className="rounded-full border border-border-light px-3 py-1 text-[10px] font-bold text-text-muted">
                      Invite
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function StatBlock({
  icon: Icon,
  value,
  label,
}: {
  icon: typeof Users;
  value: string;
  label: string;
}) {
  return (
    <div className="flex flex-col items-center gap-1 text-center">
      <Icon size={15} className="text-primary" />
      <span className="font-display text-sm font-bold text-text">{value}</span>
      <span className="text-[9px] leading-tight text-text-muted">{label}</span>
    </div>
  );
}

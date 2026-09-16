import { Globe, MessageCircle, Mail } from "lucide-react";
import { Container } from "./Container";
import { Logo } from "./Logo";

const COLUMNS = [
  {
    title: "Product",
    links: [
      { label: "How it Works", href: "#how-it-works" },
      { label: "Rounds", href: "#rounds" },
      { label: "Features", href: "#features" },
      { label: "Invite & Earn", href: "#rewards" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "FAQ", href: "#faq" },
      { label: "Contact Us", href: "mailto:support@crowdstock.app" },
      { label: "Download", href: "#download" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Responsible Play", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border py-16">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-text-muted">
              A live crowd-prediction game. Pick a number, chase the average,
              cash out — every hour, all day.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <SocialIcon icon={Globe} label="Website" />
              <SocialIcon icon={MessageCircle} label="WhatsApp" />
              <SocialIcon icon={Mail} label="Email" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <p className="text-xs font-semibold uppercase tracking-widest text-text-dim">
                  {col.title}
                </p>
                <ul className="mt-4 flex flex-col gap-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-text-muted transition-colors hover:text-text"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-border pt-8 text-xs text-text-dim sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} CrowdStock. All rights reserved.</p>
          <p>Play responsibly. Must be 18+ to participate.</p>
        </div>
      </Container>
    </footer>
  );
}

function SocialIcon({ icon: Icon, label }: { icon: typeof Globe; label: string }) {
  return (
    <a
      href="#"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-text-muted transition-colors hover:border-primary/40 hover:text-primary"
    >
      <Icon size={15} />
    </a>
  );
}

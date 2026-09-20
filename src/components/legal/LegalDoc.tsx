import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";

export function LegalPage({
  title,
  updated,
  intro,
  children,
}: {
  title: string;
  updated: string;
  intro?: ReactNode;
  children: ReactNode;
}) {
  return (
    <>
      <Nav />
      <main className="pb-24 pt-28 sm:pt-36">
        <Container className="max-w-3xl">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-text-muted transition-colors hover:text-text"
          >
            <ArrowLeft size={15} />
            Back to home
          </Link>

          <h1 className="mt-6 text-balance font-display text-3xl font-bold tracking-tight text-text sm:text-4xl">
            {title}
          </h1>
          <p className="mt-3 text-sm text-text-dim">Last updated: {updated}</p>

          {intro && (
            <p className="mt-6 text-lg leading-relaxed text-text-muted">{intro}</p>
          )}

          <div className="mt-10 space-y-10">{children}</div>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section>
      <h2 className="text-lg font-bold text-text sm:text-xl">{title}</h2>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-text-muted sm:text-[15px]">
        {children}
      </div>
    </section>
  );
}

export function LegalList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="list-disc space-y-2 pl-5 marker:text-text-dim">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

export function LegalNote({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-2xl border border-warning/25 bg-warning-tint px-5 py-4 text-sm leading-relaxed text-text">
      {children}
    </div>
  );
}

import { Container } from "./Container";
import { Reveal, RevealGroup, RevealItem } from "./Reveal";
import { cn } from "@/lib/utils";

const PEOPLE = [
  { initials: "AB", role: "Farmer", tone: "primary" as const },
  { initials: "CD", role: "Student", tone: "blue" as const },
  { initials: "EF", role: "Teacher", tone: "purple" as const },
  { initials: "GH", role: "Nurse", tone: "warning" as const },
  { initials: "IJ", role: "Rider", tone: "primary" as const },
  { initials: "KL", role: "Chef", tone: "blue" as const },
  { initials: "MN", role: "Trader", tone: "purple" as const },
  { initials: "OP", role: "Entrepreneur", tone: "warning" as const },
];

const TONE_CLASSES: Record<string, string> = {
  primary: "bg-primary-tint text-primary ring-primary/25",
  blue: "bg-blue-tint text-blue ring-blue/25",
  purple: "bg-purple-tint text-purple ring-purple/25",
  warning: "bg-warning-tint text-warning ring-warning/25",
};

export function RealPeople() {
  return (
    <section className="relative border-y border-border bg-surface/40 py-24 sm:py-28">
      <Container>
        <Reveal className="mx-auto max-w-xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Real people. Real value.
          </p>
          <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight text-text sm:text-4xl">
            Shared growth, set by everyone.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-text-muted">
            Farmers, students, teachers, nurses, riders, traders — every hour,
            real people set their own stock value. Set together, grow
            together, cash out.
          </p>
        </Reveal>

        <RevealGroup
          className="mt-14 flex flex-wrap items-start justify-center gap-x-8 gap-y-10"
          stagger={0.06}
        >
          {PEOPLE.map((person) => (
            <RevealItem key={person.role} className="flex flex-col items-center gap-3">
              <div
                className={cn(
                  "flex h-16 w-16 items-center justify-center rounded-full font-display text-lg font-bold ring-2 sm:h-[4.5rem] sm:w-[4.5rem]",
                  TONE_CLASSES[person.tone]
                )}
              >
                {person.initials}
              </div>
              <span className="text-xs font-semibold text-text-muted">
                {person.role}
              </span>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}

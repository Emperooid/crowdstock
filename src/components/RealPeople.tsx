import Image from "next/image";
import { Container } from "./Container";
import { Reveal, RevealGroup, RevealItem } from "./Reveal";

const PEOPLE = [
  { photo: "/people/farmer.jpg", role: "Farmer" },
  { photo: "/people/student.jpg", role: "Student" },
  { photo: "/people/teacher.jpg", role: "Teacher" },
  { photo: "/people/nurse.jpg", role: "Nurse" },
  { photo: "/people/rider.jpg", role: "Rider" },
  { photo: "/people/chef.jpg", role: "Chef" },
  { photo: "/people/trader.jpg", role: "Trader" },
  { photo: "/people/entrepreneur.jpg", role: "Entrepreneur" },
];

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
              <div className="relative h-16 w-16 overflow-hidden rounded-full ring-2 ring-border sm:h-[4.5rem] sm:w-[4.5rem]">
                <Image
                  src={person.photo}
                  alt={person.role}
                  fill
                  sizes="72px"
                  className="object-cover"
                />
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

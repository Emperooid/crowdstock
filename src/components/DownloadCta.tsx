import { Apple, PlayCircle } from "lucide-react";
import { Container } from "./Container";
import { Reveal } from "./Reveal";

export function DownloadCta() {
  return (
    <section id="download" className="relative py-24 sm:py-32">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-primary/25 bg-gradient-to-br from-primary-tint via-surface to-surface px-6 py-16 text-center sm:px-16 sm:py-20">
            <div className="pointer-events-none absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent_75%)]" />

            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-balance font-display text-3xl font-bold tracking-tight text-text sm:text-4xl lg:text-5xl">
                The next round opens in under an hour.
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-balance text-lg text-text-muted">
                Download CrowdStock and set your first stock value before the
                clock runs out.
              </p>

              <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-on-primary transition-transform hover:scale-[1.03] active:scale-[0.98]"
                >
                  <Apple size={18} />
                  Download on the App Store
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-full border border-border-light bg-surface px-7 py-3.5 text-sm font-semibold text-text transition-colors hover:border-primary/40 hover:bg-surface-alt"
                >
                  <PlayCircle size={18} />
                  Get it on Google Play
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

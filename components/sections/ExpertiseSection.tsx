import Container from "@/components/ui/Container";
import MonoLabel from "@/components/ui/MonoLabel";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { expertiseAreas, techStack } from "@/data/expertise";

export default function ExpertiseSection() {
  return (
    <section id="expertise" className="border-t border-border py-16 sm:py-20">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
          <RevealOnScroll>
            <MonoLabel className="mb-4 block">Competências</MonoLabel>
            <h2 className="max-w-xs text-3xl font-medium text-fg sm:text-4xl">
              Do conceito à operação.
            </h2>
            <p className="mt-4 max-w-xs text-[15px] leading-relaxed text-fg-muted">
              A ROCTIV cuida de diferentes partes do produto — da arquitetura
              à experiência final de quem usa.
            </p>
          </RevealOnScroll>

          <div>
            <dl className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
              {expertiseAreas.map((area, index) => (
                <RevealOnScroll
                  key={area.name}
                  delay={(index % 2) * 0.05}
                  className="border-t border-border pt-4"
                >
                  <dt className="flex items-baseline gap-3">
                    <span className="font-mono text-xs text-fg-subtle">
                      {String(index + 1).padStart(2, "0")}
                      <span className="text-accent">.</span>
                    </span>
                    <span className="text-[15px] font-medium text-fg">
                      {area.name}
                    </span>
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed text-fg-muted">
                    {area.description}
                  </dd>
                </RevealOnScroll>
              ))}
            </dl>

            <RevealOnScroll className="mt-12 border-t border-border pt-8">
              <MonoLabel className="mb-5 block">Tecnologias</MonoLabel>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech) => (
                  <div key={tech.name}>
                    <span className="inline-flex cursor-default items-center rounded-full border border-border px-3.5 py-1.5 font-mono text-xs text-fg-muted">
                      {tech.name}
                    </span>
                    {tech.usedIn.length > 0 && (
                      <p className="mt-2 text-xs text-fg-subtle">
                        {tech.usedIn.join(", ")}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </Container>
    </section>
  );
}

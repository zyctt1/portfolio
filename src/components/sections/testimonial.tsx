import { portfolio } from "@/data/portfolio";
import { Reveal } from "@/components/ui/reveal";

export function Testimonial() {
  return (
    <section className="testimonial section-shell" aria-labelledby="testimonial-title">
      <h2 id="testimonial-title" className="eyebrow">A word from a collaborator</h2>
      <Reveal>
        <figure>
          <blockquote>
            <p>“{portfolio.testimonial.quote}”</p>
          </blockquote>
          <figcaption>{portfolio.testimonial.attribution}</figcaption>
        </figure>
      </Reveal>
    </section>
  );
}

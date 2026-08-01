import { ArrowUpRight } from "lucide-react";
import { portfolio } from "@/data/portfolio";

export function Contact() {
  return (
    <section id="contact" className="contact section-shell" aria-labelledby="contact-title">
      <p className="eyebrow">Have something ambitious in mind?</p>
      <h2 id="contact-title">
        Let&apos;s make it<br />
        <em>impossible</em> to ignore.
      </h2>
      <a className="contact-email" href={`mailto:${portfolio.contact.email}`}>
        <span>Start a project with {portfolio.person.firstName}</span>
        <ArrowUpRight aria-hidden="true" size={30} strokeWidth={1.25} />
      </a>
    </section>
  );
}

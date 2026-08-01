import Image from "next/image";
import { ArrowRight, Check, HardHat, MonitorSmartphone } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { portfolio } from "@/data/portfolio";

export function DemoWebsites() {
  return (
    <section id="demos" className="demo-websites section-shell" aria-labelledby="demos-title">
      <header className="demo-heading">
        <p className="eyebrow">Demo websites / applied design</p>
        <Reveal>
          <h2 id="demos-title">Not every product needs to feel like software.</h2>
        </Reveal>
        <p>
          Concept websites are where I test how product thinking can make a service
          business easier to understand, trust and use.
        </p>
      </header>

      <div className="demo-list">
        {portfolio.websiteDemos.map((demo) => (
          <Reveal key={demo.title}>
            <article className="demo-project">
              <div className="demo-topline">
                <p>{demo.category}</p>
                <p>{demo.disclosure}</p>
              </div>

              <div className="demo-title-row">
                <h3>{demo.title}</h3>
                <p>{demo.description}</p>
              </div>

              <figure className="demo-browser">
                <figcaption className="demo-browser-bar">
                  <span className="browser-dots" aria-hidden="true"><i /><i /><i /></span>
                  <span>apexridgeroofing.example</span>
                  <span>Homepage concept</span>
                </figcaption>

                <div
                  className="demo-site-preview"
                  role="img"
                  aria-label="Apex Ridge Roofing homepage concept with a roofer image, service headline and inspection form"
                >
                  <div className="demo-site-media" aria-hidden="true">
                    <Image
                      className="demo-preview-image"
                      src={demo.image}
                      alt=""
                      fill
                      sizes="(max-width: 640px) 100vw, 72vw"
                    />
                    <div className="demo-site-shade" />
                    <div className="demo-site-grid" />
                    <div className="demo-site-nav">
                      <span><HardHat size={17} strokeWidth={1.8} /> Apex Ridge</span>
                      <i>Services</i><i>Projects</i><i>About</i>
                    </div>
                    <div className="demo-site-copy">
                      <span>Roofing built for Perth conditions</span>
                      <strong>Perth roofing built for everything the weather throws at it.</strong>
                      <p>Dependable workmanship, honest advice and roofing made to last.</p>
                      <b>Request a free inspection <ArrowRight size={16} /></b>
                    </div>
                    <svg className="demo-roof-line" viewBox="0 0 520 245">
                      <path d="M18 196 178 54l85 77 74-63 165 128" />
                      <path d="M78 196h368M178 54v142m159-128v128M263 131v65" />
                    </svg>
                  </div>

                  <aside className="demo-site-form" aria-hidden="true">
                    <span><MonitorSmartphone size={18} /> Start with an inspection</span>
                    <strong>Tell us about the roof.</strong>
                    <div><small>Property type</small><i>Residential</i></div>
                    <div><small>What needs attention?</small><i>Roof repairs</i></div>
                    <div><small>Suburb</small><i>Perth, WA</i></div>
                    <b>Request inspection <ArrowRight size={15} /></b>
                    <small><Check size={13} /> Clear next steps. No pressure.</small>
                  </aside>
                </div>
              </figure>

              <div className="demo-details">
                <dl>
                  <div><dt>Role</dt><dd>{demo.role}</dd></div>
                  <div><dt>Format</dt><dd>{demo.format}</dd></div>
                  <div><dt>Year</dt><dd>{demo.year}</dd></div>
                </dl>
                <div className="demo-capabilities">
                  <span>Capabilities shown</span>
                  <ul>
                    {demo.capabilities.map((capability) => <li key={capability}>{capability}</li>)}
                  </ul>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

import Image from "next/image";
import type { Project } from "@/data/portfolio";

type ProjectVisualProps = {
  kind: Project["visual"];
};

export function ProjectVisual({ kind }: ProjectVisualProps) {
  if (kind === "atarprepai") return <AtarPrepVisual />;
  if (kind === "forge") return <ForgeVisual />;
  return assertNever(kind);
}

function assertNever(value: never): never {
  throw new Error(`Unsupported project visual: ${value}`);
}

function AtarPrepVisual() {
  return (
    <figure className="project-visual visual-atarprepai">
      <div className="atar-home-stage" aria-hidden="true">
        <div className="atar-home-browser">
          <div className="atar-home-chrome">
            <span><i /><i /><i /></span>
            <b>atarprepai.com</b>
            <em>REAL PRODUCT / HOMEPAGE</em>
          </div>
          <div className="atar-home-desktop">
            <Image
              src="/atar-home-desktop.png"
              alt=""
              fill
              sizes="(max-width: 640px) 92vw, 90vw"
            />
          </div>
        </div>
        <div className="atar-home-phone">
          <div className="atar-phone-speaker" />
          <div className="atar-home-mobile">
            <Image
              src="/atar-home-mobile.png"
              alt=""
              fill
              sizes="(max-width: 640px) 72vw, 26vw"
            />
          </div>
        </div>
        <span className="atar-capture-label">DESKTOP + MOBILE / 2026</span>
      </div>
      <figcaption className="sr-only">
        The real ATARprepAI homepage shown at desktop and mobile sizes, featuring Avi, the aviation blueprint artwork, and the Study smarter, score higher headline.
      </figcaption>
    </figure>
  );
}

function ForgeVisual() {
  return (
    <figure className="project-visual visual-forge">
      <div className="forge-showcase" aria-hidden="true">
        <div className="forge-showcase-brand">
          <Image src="/forge-strike.svg" alt="" width={64} height={64} />
          <span>FORGE / PERSONAL OPERATING SYSTEM</span>
        </div>

        <div className="forge-showcase-screen forge-showcase-screen--heat">
          <div className="forge-showcase-label">
            <span>TODAY</span>
            <b>Heat column</b>
          </div>
          <div className="forge-showcase-shot">
            <Image
              src="/forge-heat-column.png"
              alt=""
              fill
              sizes="(max-width: 640px) 58vw, 34vw"
            />
          </div>
        </div>

        <div className="forge-showcase-flow">
          <span>DAILY HEAT</span>
          <i />
          <b>TRAINING OUTPUT</b>
        </div>

        <div className="forge-showcase-screen forge-showcase-screen--gym">
          <div className="forge-showcase-label">
            <span>GYM</span>
            <b>Training stack</b>
          </div>
          <div className="forge-showcase-shot">
            <Image
              src="/forge-gym.png"
              alt=""
              fill
              sizes="(max-width: 640px) 58vw, 34vw"
            />
          </div>
        </div>

        <span className="forge-ambient-word">FORGE</span>
      </div>
      <figcaption className="sr-only">
        The real Forge Heat Column Today screen and Gym training overview, showing the vertical heat gauge, daily habits, readiness score, training load, and weekly metrics.
      </figcaption>
    </figure>
  );
}

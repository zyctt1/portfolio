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
      <div className="forge-product" aria-hidden="true">
        <div className="forge-signature">
          <Image src="/forge-strike.svg" alt="" width={64} height={64} />
          <span>FORGE / PERSONAL OPERATING SYSTEM</span>
        </div>

        <div className="forge-device">
          <div className="forge-device-head">
            <div><small>SATURDAY, 1 AUGUST</small><strong>Good evening, Artur</strong></div>
            <i>A</i>
          </div>
          <div className="forge-badges"><span>✦ Lv 7</span><span>◉ 1,304</span></div>
          <div className="forge-today-card">
            <div className="forge-card-label"><span>TODAY&apos;S FORGE</span><b>2 to go</b></div>
            <div className="forge-score-ring"><strong>60%</strong><small>3 of 5 habits</small></div>
            <div className="forge-metrics">
              <span><b>60</b><small>SCORE</small></span>
              <span><b>58</b><small>DOPENESS</small></span>
              <span><b>3/5</b><small>MOOD</small></span>
            </div>
          </div>
          <div className="forge-habit-row"><i>✓</i><span><strong>Morning training</strong><small>12 day streak</small></span><b>+30 XP</b></div>
          <div className="forge-habit-row"><i>·</i><span><strong>Deep work</strong><small>45 minute target</small></span><b>Start</b></div>
          <div className="forge-tabbar">
            <span className="is-active">⌂<small>TODAY</small></span>
            <span>☷<small>HABITS</small></span>
            <span>▥<small>STATS</small></span>
            <span>•••<small>MORE</small></span>
          </div>
        </div>

        <div className="forge-insight-card">
          <div className="forge-mini-head"><span>MENTOR INSIGHT</span><i>PRIVATE · ON DEVICE</i></div>
          <strong>Your mood tends to lift<br />on training days.</strong>
          <p>Keep the habit easy to start. Consistency is doing more work than intensity.</p>
          <div><span><b>+18%</b><small>MOOD LIFT</small></span><span><b>12</b><small>DATA POINTS</small></span></div>
        </div>

        <div className="forge-stats-card">
          <div className="forge-mini-head"><span>12 WEEK CONSISTENCY</span><b>93%</b></div>
          <div className="forge-heatmap">
            {Array.from({ length: 42 }, (_, index) => <i key={index} className={index % 9 === 0 || index % 13 === 0 ? "is-dim" : ""} />)}
          </div>
          <div className="forge-stats-bottom"><span>Current streak <b>5 days</b></span><span>Best run <b>18 days</b></span></div>
        </div>

        <span className="forge-ambient-word">FORGE</span>
      </div>
      <figcaption className="sr-only">
        Forge shown as a mobile personal operating system with daily habit progress, private coaching insights, and twelve-week consistency analytics.
      </figcaption>
    </figure>
  );
}

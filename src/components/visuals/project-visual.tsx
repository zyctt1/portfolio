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
      <div className="atar-product" aria-hidden="true">
        <div className="atar-browser">
          <div className="atar-browser-bar">
            <span className="atar-browser-dots"><i /><i /><i /></span>
            <span>atarprepai / study</span>
            <b>12 day streak</b>
          </div>
          <div className="atar-app-shell">
            <aside className="atar-sidebar">
              <div className="atar-brand"><i>AP</i><strong>ATARprepAI</strong></div>
              <nav>
                <span className="is-active"><i>⌂</i> Home</span>
                <span><i>✦</i> Generate</span>
                <span><i>▱</i> Flashcards</span>
                <span><i>✓</i> Practice</span>
              </nav>
              <div className="atar-level">
                <span>WEEKLY GOAL</span>
                <strong>4 / 5 days</strong>
                <i><b /></i>
              </div>
            </aside>

            <div className="atar-main">
              <div className="atar-welcome">
                <div>
                  <span>GOOD EVENING, ARTUR</span>
                  <strong>What are we studying?</strong>
                </div>
                <i>640 XP</i>
              </div>
              <div className="atar-subjects">
                <span className="is-active">Human Biology</span>
                <span>Methods</span>
                <span>English</span>
                <span>＋</span>
              </div>
              <div className="atar-generator">
                <span className="atar-kicker">QUICK GENERATOR</span>
                <strong>Turn any topic into<br />a practice set.</strong>
                <div className="atar-input-row">
                  <span>Homeostasis &amp; feedback loops</span>
                  <b>Year 12</b>
                </div>
                <div className="atar-mode-row">
                  <span className="is-active">Quiz</span>
                  <span>Flashcards</span>
                  <span>Learn</span>
                  <span className="atar-generate">Generate <b>→</b></span>
                </div>
              </div>
              <div className="atar-recent-row">
                <div>
                  <span>RECENT SET</span>
                  <strong>Nervous system</strong>
                  <small>18 questions · 82% mastery</small>
                </div>
                <div className="atar-mastery"><span>82</span><small>MASTERED</small></div>
              </div>
            </div>
          </div>
        </div>

        <div className="atar-quiz-card">
          <div className="atar-quiz-top"><span>HUMAN BIOLOGY</span><b>04 / 12</b></div>
          <div className="atar-progress"><i /></div>
          <strong>Which response restores<br />the body to its set point?</strong>
          <div className="atar-answers">
            <span><i>A</i> Positive feedback</span>
            <span className="is-selected"><i>B</i> Negative feedback</span>
            <span><i>C</i> Feedforward control</span>
          </div>
          <small>Choose the best answer</small>
        </div>

        <div className="atar-avi-wrap">
          <span>Nailed it. Keep going!</span>
          <Image src="/atar-avi.png" alt="" width={512} height={512} />
        </div>
      </div>
      <figcaption className="sr-only">
        ATARprepAI shown as a complete study workspace with subject selection, an AI practice-set generator, quiz progress, and Avi the robot mascot.
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

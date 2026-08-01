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
      <div className="atar-masthead" aria-hidden="true">ATAR</div>
      <div className="atar-orbit" aria-hidden="true" />
      <div className="atar-card" aria-hidden="true">
        <span>BIOLOGY / ACTIVE RECALL</span>
        <strong>What drives<br />natural selection?</strong>
        <div><i /> <i /> <i /></div>
        <small>12 cards left · Avi is ready</small>
      </div>
      <div className="atar-mascot" aria-hidden="true">AVI</div>
      <figcaption className="sr-only">A stylised ATARprepAI study card with active-recall prompts and the Avi mascot.</figcaption>
    </figure>
  );
}

function ForgeVisual() {
  return (
    <figure className="project-visual visual-forge">
      <div className="forge-word" aria-hidden="true">FORGE</div>
      <div className="forge-rings" aria-hidden="true">
        <i /><i /><i />
      </div>
      <div className="forge-panel" aria-hidden="true">
        <span>TODAY / 04 AUG</span>
        <strong>Build the<br />person you<br />promised.</strong>
        <ul>
          <li><i /> Morning training <b>+30 XP</b></li>
          <li><i /> Deep work <b>42 min</b></li>
          <li><i /> Evening check-in <b>Next</b></li>
        </ul>
        <small>PRIVATE ON-DEVICE COACH</small>
      </div>
      <figcaption className="sr-only">A stylised Forge habit dashboard with progress rings, daily routines, and private coaching.</figcaption>
    </figure>
  );
}

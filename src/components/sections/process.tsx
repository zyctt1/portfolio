import { portfolio } from "@/data/portfolio";

export function Process() {
  return (
    <section id="process" className="process section-shell" aria-labelledby="process-title">
      <div className="process-heading">
        <p className="eyebrow">Process / four movements</p>
        <h2 id="process-title">Clarity before decoration.</h2>
        <p>A direct path from an open question to a finished experience.</p>
      </div>
      <ol className="process-list" role="list">
        {portfolio.process.map(([title, description], index) => (
          <li key={title}>
            <span className="process-number">0{index + 1}</span>
            <h3>{title}</h3>
            <p>{description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

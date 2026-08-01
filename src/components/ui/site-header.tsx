import { portfolio } from "@/data/portfolio";

const navItems = [
  ["Work", "#work"],
  ["About", "#about"],
  ["Story", "#story"],
  ["Process", "#process"],
] as const;

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label={`AS — ${portfolio.person.name}, back to top`}>
        AS<span>®</span>
      </a>
      <nav aria-label="Primary navigation">
        <ul className="nav-list">
          {navItems.map(([label, href]) => (
            <li key={href}>
              <a className="nav-link" href={href}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <a className="header-contact" href="#contact">
        Start a project
      </a>
    </header>
  );
}

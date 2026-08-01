import { portfolio } from "@/data/portfolio";

type SiteFooterProps = {
  copyrightYear: number;
};

export function SiteFooter({ copyrightYear }: SiteFooterProps) {
  return (
    <footer className="site-footer section-shell">
      <p>© {copyrightYear} {portfolio.person.name}</p>
      <ul aria-label="Social links">
        {portfolio.contact.socials.map((social) => (
          <li key={social.label}>
            <a href={social.href} target="_blank" rel="noreferrer">{social.label}</a>
          </li>
        ))}
      </ul>
      <a href="#top">Back to top ↑</a>
    </footer>
  );
}

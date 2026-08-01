import { PortfolioPage } from "@/components/portfolio-page";

export default function Home() {
  return <PortfolioPage copyrightYear={new Date().getFullYear()} />;
}

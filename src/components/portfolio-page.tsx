"use client";

import { MotionConfig } from "framer-motion";
import { About } from "@/components/sections/about";
import { Capabilities } from "@/components/sections/capabilities";
import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import { Process } from "@/components/sections/process";
import { SelectedWork } from "@/components/sections/selected-work";
import { Testimonial } from "@/components/sections/testimonial";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { IntroLoader } from "@/components/ui/intro-loader";
import { SiteHeader } from "@/components/ui/site-header";
import { SiteFooter } from "@/components/ui/site-footer";

type PortfolioPageProps = {
  copyrightYear: number;
};

export function PortfolioPage({ copyrightYear }: PortfolioPageProps) {
  return (
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <IntroLoader />
      <CustomCursor />
      <SiteHeader />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <SelectedWork />
        <Capabilities />
        <About />
        <Process />
        <Testimonial />
        <Contact />
      </main>
      <SiteFooter copyrightYear={copyrightYear} />
    </MotionConfig>
  );
}

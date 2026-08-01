"use client";

import {
  BookOpen,
  Code2,
  Globe2,
  HeartHandshake,
  MoveDownRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/reveal";
import { portfolio } from "@/data/portfolio";

const milestoneIcons = [Globe2, BookOpen, Code2, HeartHandshake] as const;

export function MyStory() {
  return (
    <section id="story" className="story" aria-labelledby="story-title">
      <div className="story-inner section-shell">
        <header className="story-header">
          <div className="story-intro">
            <p className="eyebrow">My Journey</p>
            <Reveal>
              <h2 id="story-title">{portfolio.story.headline}</h2>
            </Reveal>
          </div>

          <div className="story-route" aria-label="Moved from Ukraine to Australia">
            <span>UA</span>
            <i aria-hidden="true" />
            <Globe2 aria-hidden="true" size={20} strokeWidth={1.4} />
            <i aria-hidden="true" />
            <span>AU</span>
          </div>
        </header>

        <div className="story-prose">
          {portfolio.story.paragraphs.slice(0, 2).map((paragraph, paragraphIndex) => (
            <Reveal key={paragraph} delay={paragraphIndex * 0.08}>
              <p>{paragraph}</p>
            </Reveal>
          ))}

          <Reveal className="story-quote">
            <blockquote>
              <MoveDownRight aria-hidden="true" size={28} strokeWidth={1.2} />
              <p>“{portfolio.story.quote}”</p>
            </blockquote>
          </Reveal>

          {portfolio.story.paragraphs.slice(2).map((paragraph, paragraphIndex) => (
            <Reveal key={paragraph} delay={paragraphIndex * 0.08}>
              <p>{paragraph}</p>
            </Reveal>
          ))}
        </div>

        <ol className="story-timeline" aria-label="Key milestones">
          {portfolio.story.milestones.map((milestone, milestoneIndex) => {
            const MilestoneIcon = milestoneIcons[milestoneIndex];

            return (
              <motion.li
                key={milestone.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{
                  duration: 0.65,
                  delay: milestoneIndex * 0.09,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="milestone-topline">
                  <span>{milestone.label}</span>
                  <MilestoneIcon aria-hidden="true" size={20} strokeWidth={1.4} />
                </div>
                <h3>{milestone.title}</h3>
                <p>{milestone.description}</p>
              </motion.li>
            );
          })}
        </ol>

        <Reveal className="story-outro">
          <p className="eyebrow">What comes next</p>
          <div>
            <h3>{portfolio.story.outro.title}</h3>
            <p>{portfolio.story.outro.body}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

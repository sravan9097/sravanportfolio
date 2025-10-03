import React from "react";

const uxSkills: string[] = [
  "User Research",
  "Usability Testing",
  "Information Architecture",
  "Wireframing",
  "Prototyping",
  "Interaction Design",
  "Design Systems",
  "Figma",
  "Accessibility (A11y)",
  "User Flows",
  "Heuristic Evaluation",
  "Stakeholder Workshops",
  "Journey Mapping",
  "UI Design",
  "Microinteractions",
];

export const SkillsTicker: React.FC = () => {
  return (
    <section aria-label="Skills I am good at" className="w-full overflow-hidden py-6">
      <div className="container-padded">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-sm uppercase tracking-wider text-muted-foreground">Skills</span>
          <div className="h-px flex-1 bg-border" />
        </div>
        <div className="ticker-mask">
          <div className="ticker-track" aria-hidden="true">
            {[...Array(2)].map((_, loopIndex) => (
              <ul className="ticker-row" key={loopIndex}>
                {uxSkills.map((skill, idx) => (
                  <li key={`${loopIndex}-${idx}`} className="ticker-chip">
                    {skill}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsTicker;



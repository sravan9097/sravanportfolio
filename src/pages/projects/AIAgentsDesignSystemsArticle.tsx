import React, { useEffect } from "react";
import ProjectLayout from "@/components/ProjectLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const AIAgentsDesignSystemsArticle = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const invisibleUsers = [
    {
      title: "Invisible Assistant",
      description: "Grabbing latest reports from your dashboard without human interaction",
      icon: "🤖"
    },
    {
      title: "Workflow Bot",
      description: "Auto-filling forms without clicking a single button",
      icon: "⚙️"
    },
    {
      title: "Voice Assistant",
      description: "Parsing component structures to craft spoken replies",
      icon: "🎤"
    }
  ];

  const designSystemShortcomings = [
    {
      title: "Semantics, not style",
      description: "A button isn't just visual flair—it has intent, labels, roles, and data tied to it.",
      icon: "🎯"
    },
    {
      title: "Predictability over nuance",
      description: "Humans can adapt to subtle differences; machines need consistent, unvarying structures.",
      icon: "📏"
    },
    {
      title: "Clarity over ambiguity",
      description: "What does this dropdown do? What data does it expose? For agents, these questions must have explicit answers.",
      icon: "💡"
    }
  ];

  const tokenExamples = [
    {
      type: "Action Tokens",
      examples: [
        "action.primary.confirm",
        "action.secondary.cancel",
        "action.destructive.delete"
      ]
    },
    {
      type: "Feedback Tokens",
      examples: [
        "feedback.error.critical",
        "feedback.success.complete",
        "feedback.warning.attention"
      ]
    },
    {
      type: "State Tokens",
      examples: [
        "state.loading.subtle",
        "state.disabled.inactive",
        "state.active.selected"
      ]
    }
  ];

  const componentRequirements = [
    {
      requirement: "Input Definition",
      description: "What inputs it takes and in what format"
    },
    {
      requirement: "Output Specification",
      description: "What output it sends and how it's structured"
    },
    {
      requirement: "State Management",
      description: "What possible states it can be in and their meanings"
    },
    {
      requirement: "Role Definition",
      description: "What role it plays (notification, summary card, task module, etc.)"
    }
  ];

  const documentationTypes = [
    {
      type: "JSON Schema",
      description: "Machine-readable component specifications"
    },
    {
      type: "Structured Metadata",
      description: "Clear descriptions of component behavior and intent"
    },
    {
      type: "Behavioral Patterns",
      description: "Documented interaction patterns and state flows"
    }
  ];

  return (
    <ProjectLayout projectTitle="When Your 'User' Isn't Human: Reimagining Design Systems for AI Agents">
      {/* Hero Section */}
      <div className="aspect-[16/9] w-full overflow-hidden rounded-lg mb-10">
        <img 
          src="/Hero_Images/aiagents.png" 
          alt="AI Agents Design Systems" 
          className="w-full h-full object-contain" 
        />
      </div>

      

      {/* Introduction */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-foreground">When Your 'User' Isn't Human: Reimagining Design Systems for AI Agents</h2>
        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
          In the past decade, design systems have been our north star—guiding consistent, polished experiences that delight human users. We've aligned pixels, standardized components, and achieved UI harmony. But now, something subtle yet profound is shifting: increasing numbers of "users" are actually AI agents, not people. And for these system-driven agents, what works for humans simply doesn't work for them.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed">
          When the system is ambiguous, that clarity is lost on them.
        </p>
      </section>

      {/* The Invisible Users */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-foreground">The Invisible Users Among Us</h2>
        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
          Think about it—sometimes your interface isn't being navigated by human fingers but by logic-driven AI:
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {invisibleUsers.map((user, index) => (
            <div key={index} className="flex flex-col items-start gap-4 border border-border rounded-xl p-4 hover:shadow-md bg-card">
              <div className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center">
                <span className="text-neutral-600 text-3xl">{user.icon}</span>
              </div>
              <div className="flex flex-col">
                <h3 className="font-semibold text-lg mb-2 text-card-foreground">{user.title}</h3>
                <p className="text-muted-foreground text-base">{user.description}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-lg text-muted-foreground mt-8 leading-relaxed">
          These "users" don't interact with what they see—they interpret what they mean through metadata, structure, and precision.
        </p>
      </section>

      {/* Why Current Design Systems Fall Short */}
      <section className="mb-16">   
        <h2 className="text-2xl font-semibold mb-6 text-foreground">Why Current Design Systems Fall Short</h2>
        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
          Human-centered design focuses on intuition, aesthetics, responsiveness, and polished UX. But an AI needs something different:
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {designSystemShortcomings.map((shortcoming, index) => (
            <div key={index} className="flex flex-col items-start gap-4 border border-border rounded-xl p-6 hover:shadow-md bg-card">
              <div className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center">
                <span className="text-neutral-600 text-3xl">{shortcoming.icon}</span>
              </div>
              <div className="flex flex-col">
                <h3 className="font-semibold text-lg mb-2 text-card-foreground">{shortcoming.title}</h3>
                <p className="text-muted-foreground text-base">{shortcoming.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Dual-Minded Approach */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-foreground">Designing for Humans and Agents—A Dual-Minded Approach</h2>
        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
          We now have two realities to design for:
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-950/20 rounded-r-lg p-6">
            <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-3">Humans</h3>
            <ul className="text-blue-800 dark:text-blue-200 space-y-2">
              <li>• Seek clarity and empathy</li>
              <li>• Value flexibility and intuition</li>
              <li>• Adapt to subtle differences</li>
              <li>• Appreciate aesthetic polish</li>
            </ul>
          </div>
          <div className="border-l-4 border-green-500 bg-green-50 dark:bg-green-950/20 rounded-r-lg p-6">
            <h3 className="text-xl font-semibold text-green-900 dark:text-green-100 mb-3">Machines</h3>
            <ul className="text-green-800 dark:text-green-200 space-y-2">
              <li>• Require precision and structure</li>
              <li>• Need consistent, unvarying patterns</li>
              <li>• Demand explicit intent and meaning</li>
              <li>• Rely on machine-readable metadata</li>
            </ul>
          </div>
        </div>
        <p className="text-lg text-muted-foreground mt-8 leading-relaxed">
          Merging these means evolving design systems to serve both audiences simultaneously.
        </p>
      </section>

      {/* How to Make Your Design System Agent-Friendly */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-foreground">How to Make Your Design System Agent‑Friendly</h2>
        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
          Here's how to bridge that gap:
        </p>

        {/* Name tokens with intent */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-4 text-foreground">1. Name tokens with intent</h3>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            Instead of <code className="bg-muted px-2 py-1 rounded">color.primary.500</code>, use meaningful labels like:
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {tokenExamples.map((example, index) => (
              <div key={index} className="border border-border rounded-lg p-6 bg-card">
                <h4 className="font-semibold text-lg mb-3 text-card-foreground">{example.type}</h4>
                <div className="space-y-2">
                  {example.examples.map((token, tokenIndex) => (
                    <code key={tokenIndex} className="block bg-muted px-3 py-2 rounded text-sm font-mono">
                      {token}
                    </code>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="text-lg text-muted-foreground mt-6 leading-relaxed">
            This clarity helps both engineers—and AI agents—understand purpose, not just hue.
          </p>
        </div>

        {/* Define transparent components */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-4 text-foreground">2. Define transparent components</h3>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            Each piece should clearly state:
          </p>
          <div className="grid gap-4">
            {componentRequirements.map((requirement, index) => (
              <div key={index} className="flex flex-row items-center gap-4 border border-border rounded-xl p-4 hover:shadow-md bg-card">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-2xl">{index + 1}</span>
                </div>
                <div className="flex flex-col">
                  <h4 className="font-semibold text-lg mb-2 text-card-foreground">{requirement.requirement}</h4>
                  <p className="text-muted-foreground text-base">{requirement.description}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-lg text-muted-foreground mt-6 leading-relaxed">
            This enables agents to interact reliably and developers to onboard faster.
          </p>
        </div>

        {/* Document with machines in mind */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-4 text-foreground">3. Document with machines in mind</h3>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            Beyond visuals and human-facing docs, you need:
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {documentationTypes.map((docType, index) => (
            <div key={index} className="flex flex-col items-start gap-4 border border-border rounded-xl p-4 bg-card">
               
                <div className="flex flex-col">
                  <h4 className="font-semibold text-lg mb-2 text-card-foreground">{docType.type}</h4>
                  <p className="text-muted-foreground text-base">{docType.description}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-lg text-muted-foreground mt-6 leading-relaxed">
            Think of it as an API spec—for your UI.
          </p>
        </div>
      </section>

      {/* A New Chapter Begins */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-foreground">A New Chapter Begins</h2>
        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
          Just like responsive design expanded our thinking from desktop to mobile, agent‑aware design is pushing us to look beyond the screen. AI agents are already shaping workflows, triggering flows, and accessing systems—whether we planned for them or not. Making design systems that encode intent and clarity helps ensure these agents understand what we've built.
        </p>
        <div className="border-l-4 border-purple-500 bg-purple-50 dark:bg-purple-950/20 rounded-r-lg p-6 my-8">
          <blockquote className="text-lg text-purple-900 dark:text-purple-100 italic leading-relaxed">
            "So, bring agents into the conversation early. Build with dual intent. Design systems that humans and machines can both navigate—and unlock a more inclusive, robust future."
          </blockquote>
        </div>
      </section>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <h2 className="text-xl font-bold mb-4 text-primary">Interested in working together?</h2>
        <Button asChild className="bg-accent hover:bg-accent-hover text-white">
          <a href="/#contact">Contact Me</a>
        </Button>
      </div>
    </ProjectLayout>
  );
};

export default AIAgentsDesignSystemsArticle;

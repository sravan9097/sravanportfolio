import React, { useEffect } from "react";
import ProjectLayout from "@/components/ProjectLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const MCPDesignCodeBridgeArticle = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const processSteps = [
    {
      step: "1",
      title: "Export Design System as MCP JSON",
      description: "Figma Dev Mode (or your DS tooling) publishes tokens, components, docs → mcp.json.",
      benefit: "Creates a single machine-readable contract for design intent."
    },
    {
      step: "2",
      title: "Host an MCP Server",
      description: "Add the open-source Figma Dev Mode MCP Server or any MCP endpoint inside your repo pipeline.",
      benefit: "Makes live design data queryable by IDE extensions, Storybook, CI, LLM agents."
    },
    {
      step: "3",
      title: "Wire AI Code Agents",
      description: "VS Code, Cursor, Claude Code, etc. call the MCP API to fetch canonical token names, component props, accessibility notes while generating or refactoring UI code.",
      benefit: "No more mismatched hex values or ad-hoc class names—AI suggests code that's already \"on brand.\""
    },
    {
      step: "4",
      title: "Validate During Build",
      description: "CI script compares design-token hashes in MCP vs. CSS/JS output; fails build on drift.",
      benefit: "Prevents silent style regressions and keeps code in lock-step with Figma variables."
    },
    {
      step: "5",
      title: "Auto-Generate Dev Docs",
      description: "Docs site (e.g., Storybook, Docusaurus) consumes the same MCP feed to render live component demos and token tables.",
      benefit: "Designers edit Figma → docs & code update automatically—good-bye, stale style guides."
    }
  ];

  const keyBenefits = [
    {
      title: "Instant Design-to-Code Consistency",
      description: "Because AI agents read from the MCP schema, any generated React, Vue, or native code automatically references the correct tokens, variants, and accessibility guidelines.",
      icon: "🎯"
    },
    {
      title: "Zero-Drift Documentation",
      description: "Your documentation site is no longer a screenshot graveyard. It's rebuilt every time the MCP feed changes.",
      icon: "📚"
    },
    {
      title: "Faster Code Reviews",
      description: "Linters can flag hard-coded values that don't exist in the MCP feed, letting reviewers focus on logic instead of nit-picking UI details.",
      icon: "⚡"
    },
    {
      title: "Future-Proof for Generative UI",
      description: "When \"prompt-to-prototype\" tools like Figma Make spin up new screens, they already know your button, spacing, and shadow vocabulary—avoiding one-off styles from day one.",
      icon: "🚀"
    }
  ];

  const practicalTips = [
    {
      title: "Audit Your Design System",
      description: "Make sure tokens, components, and docs are complete and accurately named—garbage in, garbage out."
    },
    {
      title: "Spin Up the MCP Server Locally",
      description: "The open repo (https://modelcontextprotocol.io) includes a quick Docker setup."
    },
    {
      title: "Add MCP Linting to Your CI",
      description: "Use the CLI to compare CSS variables or Tailwind config against the MCP export."
    },
    {
      title: "Enable Dev-Mode Extensions",
      description: "VS Code and Cursor already have MCP plugins—install and point them to your server."
    },
    {
      title: "Educate the Team",
      description: "Designers publish → Dev Bot comments PR → Docs rebuild. Once everyone sees the loop, adoption snowballs."
    }
  ];

  return (
    <ProjectLayout projectTitle="Bridging Design & Code in the Age of AI: How MCP Turns Your Design System into a Live-Synced Developer Guide">
      {/* Hero Section */}
      <div className="aspect-[16/9] w-full overflow-hidden rounded-lg mb-10">
        <img 
          src="/Hero_Images/figmamcpCover.webp" 
          alt="MCP Design Code Bridge" 
          className="w-full h-full object-cover" 
        />
      </div>

      {/* Article Header */}
      <div className="mb-12">
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span>December 2024</span>
          <span>•</span>
          <span>6 mins read</span>
        </div>
      </div>

      {/* Introduction */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-foreground">Bridging Design & Code in the Age of AI: <br/> How MCP Turns Your Design System into a Live-Synced Developer Guide</h2>
        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
          Design and engineering have always shared the same goal—shipping consistent, scalable interfaces—but they rarely share the same source of truth. Figma files drift from Git repos, token names mutate, and style-guide PDFs gather dust.
        </p>
        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
          Enter <strong>MCP (Model Context Protocol)</strong> — an open JSON standard created by Anthropic to let any AI-powered tool (design agents, code editors, CI bots) consume the exact structure of your design system in real time. When an MCP server runs behind your Figma Dev Mode library, every color token, component variant, and interaction guideline becomes an addressable "prompt" that AI or human developers can query, validate, and keep in sync with production code.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Below is an at-a-glance process for turning a traditional design system into an AI-ready, bi-directional style guide using MCP.
        </p>
      </section>

      {/* 5-Step Process */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-foreground">5-Step Process to Sync Design → Dev with MCP</h2>
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full divide-y divide-border">
            <thead className="bg-muted">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Step</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">What Happens</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Why It Matters</th>
              </tr>
            </thead>
            <tbody className="bg-card divide-y divide-border">
              {processSteps.map((step, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                      <span className="text-blue-600 font-bold text-sm">{step.step}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-card-foreground mb-1">{step.title}</div>
                    <div className="text-sm text-muted-foreground">{step.description}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-muted-foreground">{step.benefit}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-foreground">Key Benefits</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {keyBenefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-start gap-4 border border-border rounded-xl p-6 hover:shadow-md bg-card">
              <div className="w-12 h-12 bg-neutral-50 rounded-full flex items-center justify-center">
                <span className="text-blue-600 text-3xl">{benefit.icon}</span>
              </div>
              <div className="flex flex-col">
                <h3 className="font-bold text-xl mb-2 text-card-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground text-base">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Practical Tips */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-foreground">Practical Tips to Get Started</h2>
        <div className="flex flex-col gap-4 p-6 mt-8 text-lg rounded-lg border border-border">
          {practicalTips.map((tip, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-blue-600 text-sm font-bold">{index + 1}</span>
              </div>
              <div className="flex flex-col">
                <h3 className="font-semibold text-card-foreground mb-1">{tip.title}</h3>
                <p className="text-muted-foreground text-base leading-relaxed">{tip.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Implementation */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-foreground">Technical Implementation</h2>
        <div className="flex flex-col gap-4 text-lg">
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold text-foreground">Figma Access Token</h3>
            <p className="flex flex-col text-muted-foreground text-base leading-relaxed">
                To get started, you'll need a Figma access token. You can generate one by following these steps: <br/> (It's recommended to save the token as an environment variable )
                <img src="/figmatokenaccess.png" alt="Figma Access Token" className="w-2/3 mx-auto my-4 h-auto" />
            </p>
          </div>
        </div>
        <div className="grid  gap-8">
            {/* <div>
            <h3 className="text-xl font-semibold mb-4 text-foreground">Install and Start the Figma-Context-MCP Server</h3>
            <div className="bg-muted p-4 rounded-md mb-4">
            <p className="text-muted-foreground font-mono text-base leading-relaxed">
                npx figma-developer-mcp --figma-api-key=$FIGMA_API_KEY
            </p> 
            
            </div>
            
            </div> */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-foreground">MCP Server Setup</h3>
            <div className="bg-muted p-4 rounded-md mb-4">
              <pre className="text-sm font-mono text-muted-foreground">
{`# Install MCP Server 
npm install @modelcontextprotocol/server

# Start server with Figma integration
mcp-server --figma-token $FIGMA_API_KEY`}
                </pre>
            </div>
            <p className="text-muted-foreground text-sm">
              The MCP server acts as a bridge between your design system and development tools, providing real-time access to design tokens and components.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-foreground">Cursor Integration</h3>
            <div className="bg-muted p-4 rounded-md mb-4">
              <pre className="text-sm font-mono text-muted-foreground bg-muted p-4 rounded-md">
{`{
  "mcpServers": {
    "Framelink Figma MCP": {
      "command": "npx",
      "args": ["-y", "figma-developer-mcp", "--figma-api-key=$FIGMA_API_KEY", "--stdio"]
    }
  }
}`}
              </pre>
            </div>
            <p className="text-muted-foreground text-sm">
              Configure your Cursor to use the MCP server for real-time design system integration and AI-powered code suggestions. For Other IDE environments check the respective documentation.
            </p>
          </div>
        </div>
      </section>

      {/* Workflow Diagram */}
      <section className="mb-16">
        
        <div className="brounded-lg">
          <img src="/mcp_server_figma.png" alt="MCP Workflow" className="w-full h-auto" />
          
        </div>
      </section>

      {/* Conclusion */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-foreground">Conclusion</h2>
        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
          MCP doesn't replace your design system; it operationalizes it. By exposing design intent as structured, real-time data, you empower both AI and human developers to speak the same language, shrink hand-off overhead, and let your design system do what it was meant to do—keep experiences consistent at scale.
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">The Future of Design Systems</h3>
          <p className="text-blue-800">
            As AI becomes more integrated into our development workflows, MCP provides the missing link between design intent and code implementation. The result? Faster development, better consistency, and a design system that truly serves both designers and developers.
          </p>
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

export default MCPDesignCodeBridgeArticle; 
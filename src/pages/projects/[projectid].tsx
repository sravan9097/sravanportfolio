import React from "react";
import { useParams, Navigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseStudyTemplate from "@/components/CaseStudyTemplate";
import ArticleTemplate from "@/components/ArticleTemplate";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { getDocBySlug } from "@/lib/content";
import BeautifulCodeRedesignProject from "./BeautifulCodeRedesignProject";
import DesignSystemProject from "./DesignSystemProject";
import bcexperienceproject from "./BCexperienceproject";
import ShareChatLeadGenerationProject from "./ShareChatLeadGenerationProject";
import DesignTokenNamingArticle from "./DesignTokenNamingArticle";
import MCPDesignCodeBridgeArticle from "./MCPDesignCodeBridgeArticle";
import AIAgentsDesignSystemsArticle from "./AIAgentsDesignSystemsArticle";

const projectComponents: Record<string, React.FC> = {
  "design-system": DesignSystemProject,
  "design-tokens-naming": DesignTokenNamingArticle,
  "mcp-design-code-bridge": MCPDesignCodeBridgeArticle,
  "ai-agents-design-systems": AIAgentsDesignSystemsArticle,
  "beautifulcode-revamp": BeautifulCodeRedesignProject,
  "bcexperienceproject": bcexperienceproject,
  "sharechat": ShareChatLeadGenerationProject
};

const ProjectDetailPage: React.FC = () => {
  const { projectid } = useParams<{ projectid: string }>();

  // Try markdown first
  const doc = getDocBySlug(projectid);
  if (doc) {
    // Route Case Studies through CaseStudyTemplate
    if (doc.category === "Case Study") {
      return <CaseStudyTemplate doc={doc} />;
    }
    
    // Route Articles through ArticleTemplate
    if (doc.category === "Article") {
      return <ArticleTemplate doc={doc} />;
    }
    
    // Fallback to simple markdown rendering for other content types
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="max-w-3xl mx-auto pt-28 pb-16 px-4 md:px-8">
          <div className="mb-6 flex items-center gap-3">
            <div className="h-px w-8 bg-accent" />
            <span className="text-xs font-semibold text-accent uppercase tracking-[0.2em]">
              {doc.category}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
            {doc.title}
          </h1>
          {doc.image && (
            <div className="mb-10">
              <div className="relative overflow-hidden bg-muted">
                <div className="aspect-[16/9]">
                  <img src={doc.image} alt={doc.title} className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          )}
          <article className="prose prose-neutral max-w-none dark:prose-invert prose-headings:scroll-mt-24">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeSlug, [rehypeAutolinkHeadings, { behavior: "append" }]]}
            >
              {doc.body}
            </ReactMarkdown>
          </article>
        </main>
        <Footer />
      </div>
    );
  }

  // Fallback to legacy mapped components while migrating
  const ProjectComponent = projectComponents[projectid ?? ""];
  if (!ProjectComponent) {
    return <Navigate to="/projects" replace />;
  }
  return <ProjectComponent />;
};

export default ProjectDetailPage;

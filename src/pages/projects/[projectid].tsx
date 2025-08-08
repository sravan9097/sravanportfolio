import React from "react";
import { useParams, Navigate } from "react-router-dom";
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
  const ProjectComponent = projectComponents[projectid ?? ""];
  if (!ProjectComponent) {
    return <Navigate to="/projects" replace />;
  }
  return <ProjectComponent />;
};

export default ProjectDetailPage;

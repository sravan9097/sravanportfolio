import React from "react";
import { useParams, Navigate } from "react-router-dom";
import DesignTokenNamingArticle from "../projects/DesignTokenNamingArticle";

const articleComponents: Record<string, React.FC> = {
  "design-token-naming": DesignTokenNamingArticle,
};

const ArticleDetailPage: React.FC = () => {
  const { articleid } = useParams<{ articleid: string }>();
  const ArticleComponent = articleComponents[articleid ?? ""];
  if (!ArticleComponent) {
    return <Navigate to="/articles" replace />;
  }
  return <ArticleComponent />;
};

export default ArticleDetailPage; 
import React from "react";
import { useParams, Navigate } from "react-router-dom";
import BeautifulCodeRedesignProject from "./BeautifulCodeRedesignProject";
import DesignSystemProject from "./DesignSystemProject";
import bcexperienceproject from "./BCexperienceproject";
import ShareChatLeadGenerationProject from "./ShareChatLeadGenerationProject";
import FitnessTrackerProject from "./FitnessTrackerProject";
import TravelAppProject from "./TravelAppProject";

const projectComponents: Record<string, React.FC> = {
  "design-system": DesignSystemProject,
  "beautifulcode-revamp": BeautifulCodeRedesignProject,
  "bcexperienceproject": bcexperienceproject,
  "sharechat": ShareChatLeadGenerationProject,
  "fitness-tracker": FitnessTrackerProject,
  "travel-app": TravelAppProject,
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

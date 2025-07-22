
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const ProjectNotFound = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto pt-32 pb-16 px-4">
        <h1 className="text-3xl font-bold mb-4">Project not found</h1>
        <p className="mb-6 text-primary-light">The project you're looking for doesn't exist or has been moved.</p>
        <Link to="/#projects" className="text-accent hover:underline flex items-center">
          <ArrowLeft className="mr-2 h-5 w-5" /> Back to projects
        </Link>
      </div>
    </div>
  );
};

export default ProjectNotFound;

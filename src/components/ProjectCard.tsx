
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
}

const ProjectCard = ({ id, title, description, image, category }: ProjectCardProps) => {
  return (
    <Link to={`/project/${id}`} className="group project-card block">
      <div className="aspect-[16/9] w-full overflow-hidden rounded-lg border border-border">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-6">
            <p className="text-xs font-medium text-white/80 uppercase tracking-wider mb-1">{category}</p>
            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            <p className="text-sm text-white/90 mb-4 line-clamp-2">{description}</p>
            <div className="flex items-center text-accent">
              <span className="text-sm font-medium">View Project</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;

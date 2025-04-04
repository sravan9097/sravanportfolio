
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      id: "finance-app",
      title: "Mobile Banking App",
      description: "Redesigning the user experience for a digital banking platform focusing on accessibility and ease of use.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3",
      category: "UX Design"
    },
    {
      id: "fitness-tracker",
      title: "Fitness Tracker Dashboard",
      description: "Creating an intuitive dashboard for users to track their fitness goals and progress.",
      image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9",
      category: "UI/UX Design"
    },
    {
      id: "ecommerce-redesign",
      title: "E-Commerce Redesign",
      description: "Transforming an e-commerce platform with a focus on conversion optimization and user flow.",
      image: "https://images.unsplash.com/photo-1532299033990-5bf394529e15",
      category: "UX Research & Design"
    },
    {
      id: "travel-app",
      title: "Travel Planning App",
      description: "Designing a seamless experience for travelers to plan and book their trips in one place.",
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800",
      category: "Mobile Design"
    }
  ];

  return (
    <section className="section-padding bg-background-alt" id="projects">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-primary">Featured Projects</h2>
          <p className="text-primary-light">A selection of my recent work in UX design</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              category={project.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

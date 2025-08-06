import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User } from "lucide-react";

const Articles = () => {
  const allArticles = [
    {
      id: "design-token-naming",
      title: "Naming Tokens in Design Systems: A Practical Guide for Scalable UI Architecture",
      description: "A comprehensive framework for naming design tokens that ensures consistency, scalability, and cross-functional collaboration.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Design System",
      author: "Sravan Kumar",
      date: "December 2024",
      readTime: "8 min read",
      tags: ["Design System", "Token Naming", "Best Practices"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className=" max-w-5xl container mx-auto pt-32 pb-16">
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Articles</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-foreground">Articles</h1>
          <p className="text-lg text-muted-foreground mb-12">
            Insights, tutorials, and thoughts on design systems, UX, and product design.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allArticles.map((article) => (
              <div key={article.id} className="group">
                <Link to={`/article/${article.id}`} className="block">
                  <div className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-[16/10] overflow-hidden">
                      <img 
                        src={article.image} 
                        alt={article.title} 
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {article.tags.map((tag, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <h3 className="text-xl overflow-hidden text-ellipsis whitespace-nowrap font-semibold text-card-foreground mb-3 group-hover:text-accent transition-colors">{article.title}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-3 mb-4">{article.description}</p>
                      
                      {/* Article metadata */}
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <User className="h-3 w-3" />
                            <span>{article.author}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            <span>{article.date}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          
          {allArticles.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No articles published yet. Check back soon!</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Articles; 
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { LazyImage } from "@/components/ui/LazyImage";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User } from "lucide-react";

const Articles = () => {
  const articles = [
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
    <section className="section-padding bg-background" id="articles">
      <div className="flex flex-col items-center mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Latest Articles</h2>
          <p className="text-muted-foreground">Insights, tutorials, and thoughts on design systems, UX, and product design</p>
        </div>
        <div className="items-center justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.slice(0, 3).map((article) => (
            <div key={article.id} className="w-full min-w-0 flex flex-col">
              <Link to={`/article/${article.id}`}>
                <div className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="w-full">
                    <LazyImage 
                      src={article.image} 
                      alt={article.title} 
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
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
                    <h3 className="text-xl overflow-hidden text-ellipsis whitespace-nowrap font-semibold text-card-foreground mb-3 hover:text-accent transition-colors">{article.title}</h3>
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
        <div className="text-center mt-12">
          <Link to="/articles">
            <Button variant="outline" size="lg">
              View All Articles
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Articles; 
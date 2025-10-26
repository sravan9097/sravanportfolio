import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import ProjectLayout from "@/components/ProjectLayout";
import ImageCarousel from "@/components/ImageCarousel";
import { Doc } from "@/lib/content";
import { getCarouselData } from "@/lib/carouselData";
import styles from "@/styles/article-content.module.scss";

interface ArticleTemplateProps {
  doc: Doc;
}

const ArticleTemplate: React.FC<ArticleTemplateProps> = ({ doc }) => {
  // Custom component to render carousel placeholders
  const CarouselPlaceholder = ({ carouselType }: { carouselType: string }) => {
    // First try to get carousel data from the document's frontmatter
    let images = doc.carousels?.[carouselType];
    
    // Fallback to global carousel data
    if (!images || images.length === 0) {
      images = getCarouselData(carouselType);
    }
    
    if (!images || images.length === 0) {
      console.warn(`No carousel data found for type: ${carouselType}`);
      return null;
    }
    
    return <ImageCarousel images={images} />;
  };

  // Custom components for ReactMarkdown
  const markdownComponents = {
    h2: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h2 className={styles.sectionHeading} {...props}>
        {children}
      </h2>
    ),
    h3: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h3 className={styles.subsectionHeading} {...props}>
        {children}
      </h3>
    ),
    h4: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h4 className={styles.subsubsectionHeading} {...props}>
        {children}
      </h4>
    ),
    blockquote: ({ children, ...props }: React.HTMLAttributes<HTMLQuoteElement>) => (
      <blockquote className={styles.blockquote} {...props}>
        {children}
      </blockquote>
    ),
    img: ({ src, alt, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => (
      <img 
        src={src} 
        alt={alt} 
        className={styles.responsiveImage} 
        {...props} 
      />
    ),
    ul: ({ children, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
      <ul className={styles.contentList} {...props}>
        {children}
      </ul>
    ),
    ol: ({ children, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
      <ol className={styles.contentList} {...props}>
        {children}
      </ol>
    ),
    li: ({ children, ...props }: React.HTMLAttributes<HTMLLIElement>) => (
      <li {...props}>{children}</li>
    ),
    p: ({ children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
      <p className={styles.paragraph} {...props}>
        {children}
      </p>
    ),
    code: ({ children, ...props }: React.HTMLAttributes<HTMLElement>) => (
      <code className={styles.inlineCode} {...props}>
        {children}
      </code>
    ),
    pre: ({ children, ...props }: React.HTMLAttributes<HTMLPreElement>) => (
      <pre className={styles.codeBlock} {...props}>
        {children}
      </pre>
    ),
    div: ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
      // Handle carousel placeholders
      if (props['data-carousel']) {
        return <CarouselPlaceholder carouselType={props['data-carousel']} />;
      }
      // Handle wireframe grid divs
      if (props.className === 'wireframeGrid') {
        const { className, ...restProps } = props;
        return <div className={styles.wireframeGrid} {...restProps}>{children}</div>;
      }
      return <div {...props}>{children}</div>;
    },
  };

  return (
    <ProjectLayout projectTitle={doc.title}>
      <div className={`min-h-screen bg-background ${styles.articleContent}`}>
        <div className={`flex flex-col max-w-6xl mx-auto ${styles.contentContainer}`}>
          {/* Hero Section */}
          <div className={styles.heroSection}>
            <span className={styles.categoryLabel}>
              {doc.category} — {doc.tags?.[0] || 'Design'}
            </span>
            <h1 className={styles.title}>{doc.title}</h1>
            
            {doc.image && (
              <div className={styles.coverImage}>
                <img 
                  src={doc.image} 
                  alt={doc.title} 
                />
              </div>
            )}
          </div>
          
          {/* Meta Information */}
          {/* <div className={styles.metaInfo}>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Published</span>
              <span className={styles.metaValue}>{new Date(doc.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
            </div>
            {doc.tags && doc.tags.length > 0 && (
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Tags</span>
                <div className={styles.tags}>
                  {doc.tags.map((tag, index) => (
                    <span key={index} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div> */}

          {/* Markdown Content */}
          <div className={styles.markdownContent}>
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw, rehypeSlug, [rehypeAutolinkHeadings, { behavior: "append" }]]}
              components={markdownComponents}
            >
              {doc.body}
            </ReactMarkdown>
          </div>

          {/* Article Footer */}
          <div className={styles.articleFooter}>
            <div className={styles.footerContent}>
              <p className={styles.footerText}>
                Thanks for reading! If you found this article helpful, consider sharing it with others who might benefit.
              </p>
              <div className={styles.footerActions}>
                <a 
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(doc.title)}&url=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.shareButton}
                >
                  Share on Twitter
                </a>
                <a 
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.shareButton}
                >
                  Share on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProjectLayout>
  );
};

export default ArticleTemplate;

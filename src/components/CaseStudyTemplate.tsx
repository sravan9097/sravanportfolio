import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import ProjectLayout from "@/components/ProjectLayout";
import ImageCarousel from "@/components/ImageCarousel";
import { Doc } from "@/lib/content";
import { getCarouselData, hasCarouselData } from "@/lib/carouselData";
import styles from "@/styles/case-study-content.module.scss";

interface CaseStudyTemplateProps {
  doc: Doc;
}

const CaseStudyTemplate: React.FC<CaseStudyTemplateProps> = ({ doc }) => {
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
    
    return <ImageCarousel images={images} isMobile={carouselType === 'mobile-screens'} />;
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
    li: ({ children, ...props }: React.HTMLAttributes<HTMLLIElement>) => (
      <li {...props}>{children}</li>
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
      // Handle metrics grid
      if (props.className === 'metricsGrid') {
        const { className, ...restProps } = props;
        return <div className={styles.metricsGrid} {...restProps}>{children}</div>;
      }
      // Handle metric card
      if (props.className === 'metricCard') {
        const { className, ...restProps } = props;
        return <div className={styles.metricCard} {...restProps}>{children}</div>;
      }
      // Handle metric value
      if (props.className === 'metricValue') {
        const { className, ...restProps } = props;
        return <div className={styles.metricValue} {...restProps}>{children}</div>;
      }
      // Handle metric title
      if (props.className === 'metricTitle') {
        const { className, ...restProps } = props;
        return <div className={styles.metricTitle} {...restProps}>{children}</div>;
      }
      // Handle metric description
      if (props.className === 'metricDescription') {
        const { className, ...restProps } = props;
        return <div className={styles.metricDescription} {...restProps}>{children}</div>;
      }
      return <div {...props}>{children}</div>;
    },
  };

  return (
    <ProjectLayout projectTitle={doc.title}>
      <div className={`min-h-screen bg-background ${styles.caseStudyContent}`}>
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
          
          {/* Meta Grid */}
          {(doc.timeline || doc.tools || doc.role) && (
            <div className={styles.metaGrid}>
              {doc.timeline && (
                <div className={styles.metaItem}>
                  <h2 className={styles.metaLabel}>Timeline</h2>
                  <p className={styles.metaValue}>{doc.timeline}</p>
                </div>
              )}
              {doc.tools && (
                <div className={styles.metaItem}>
                  <h2 className={styles.metaLabel}>Tools</h2>
                  <ul className={styles.metaValue}>
                    {doc.tools.map((tool, index) => (
                      <li key={index}>{tool}</li>
                    ))}
                  </ul>
                </div>
              )}
              {doc.role && (
                <div className={styles.metaItem}>
                  <h2 className={styles.metaLabel}>My Role</h2>
                  <p className={styles.metaValue}>{doc.role}</p>
                </div>
              )}
            </div>
          )}

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

          {/* Prototype Links Section */}
          {doc.prototypeLinks && doc.prototypeLinks.length > 0 && (
            <div className={`w-full ${styles.prototypeSection}`}>
              <h2 className={styles.sectionHeading}>Final Prototype</h2>
              <div className={styles.prototypeCards}>
                {doc.prototypeLinks.map((link, index) => (
                  <div key={index} className={styles.prototypeCard}>
                    <div className={styles.cardHeader}>
                      <div className={`${styles.cardIcon} ${link.icon === 'mobile' ? styles.mobile : styles.desktop}`}>
                        {link.icon === 'desktop' ? (
                          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        ) : (
                          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                          </svg>
                        )}
                      </div>
                      <div>
                        <h4 className={styles.cardTitle}>{link.label}</h4>
                        <p className={styles.cardSubtitle}>
                          {link.icon === 'desktop' ? 'Full desktop experience' : 'Touch-optimized experience'}
                        </p>
                      </div>
                    </div>
                    <p className={styles.cardDescription}>
                      {link.icon === 'desktop' 
                        ? 'Experience the complete desktop version with all interactions, navigation, and responsive elements.'
                        : 'Test the mobile experience with touch interactions, responsive navigation, and mobile-specific features.'
                      }
                    </p>
                    <a 
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`${styles.cardLink} ${link.icon === 'mobile' ? styles.mobile : styles.desktop}`}
                    >
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      View {link.label}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Figma File CTA */}
          {doc.figmaFileUrl && (
            <div className={styles.figmaFileCTA}>
              <div className={styles.ctaContent}>
                <div className={styles.figmaLogo}>
                  <img src="/figmalogo.svg" alt="Figma" />
                </div>
                <div className={styles.ctaText}>
                  <p className={styles.description}>
                    This is the main Figma project file where I have everything documented in detail.
                  </p>
                  <a 
                    href={doc.figmaFileUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    View detailed documentation →
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </ProjectLayout>
  );
};

export default CaseStudyTemplate;

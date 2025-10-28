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
    blockquote: ({ children, ...props }: React.HTMLAttributes<HTMLQuoteElement>) => (
      <blockquote className={styles.blockquote} {...props}>
        {children}
      </blockquote>
    ),
    img: ({ src, alt, className, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => {
      // Handle special game thumbnail class
      if (className === 'gameThumbnail') {
        return <img className={styles.gameThumbnail} src={src} alt={alt} {...props} />;
      }
      // Default: apply responsive image styling but keep any other props
      return <img className={styles.responsiveImage} src={src} alt={alt} {...props} />;
    },
    a: ({ children, href, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
      if (props.className === 'gameCTALink') {
        const { className, ...restProps } = props;
        return <a className={styles.gameCTALink} href={href} {...restProps}>{children}</a>;
      }
      
      // For regular links, add target="_blank" and rel for external links
      const isExternal = href?.startsWith('http');
      const linkProps = isExternal 
        ? { ...props, target: '_blank', rel: 'noopener noreferrer' }
        : props;
      
      return <a href={href} {...linkProps}>{children}</a>;
    },
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
      // Handle game CTA
      if (props.className === 'gameCTA') {
        const { className, ...restProps } = props;
        return <div className={styles.gameCTA} {...restProps}>{children}</div>;
      }
      if (props.className === 'gameCTACard') {
        const { className, ...restProps } = props;
        return <div className={styles.gameCTACard} {...restProps}>{children}</div>;
      }
      if (props.className === 'gameCTAContent') {
        const { className, ...restProps } = props;
        return <div className={styles.gameCTAContent} {...restProps}>{children}</div>;
      }
      return <div {...props}>{children}</div>;
    },
    h3: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
      if (props.className === 'gameCTATitle') {
        const { className, ...restProps } = props;
        return <h3 className={styles.gameCTATitle} {...restProps}>{children}</h3>;
      }
      return <h3 className={styles.subsectionHeading} {...props}>{children}</h3>;
    },
    p: ({ children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => {
      if (props.className === 'gameCTADescription') {
        const { className, ...restProps } = props;
        return <p className={styles.gameCTADescription} {...restProps}>{children}</p>;
      }
      return <p className={styles.paragraph} {...props}>{children}</p>;
    },
  };

  return (
    <ProjectLayout projectTitle={doc.title}>
      <div className={`min-h-screen bg-background ${styles.caseStudyContent}`}>
        <div className={`flex flex-col ${styles.contentContainer}`}>
          {/* Hero Section */}
          <div className={styles.heroSection}>
            <span className={styles.categoryLabel}>
              {doc.category} - {doc.tags?.[0] || 'Design'}
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

          {/* Website CTA */}
          {doc.websiteUrl && (
            <div className={styles.figmaFileCTA}>
              <div className={styles.ctaContent}>
                <div className={styles.figmaLogo}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </div>
                <div className={styles.ctaText}>
                  <p className={styles.description}>
                    Try the live product yourself and experience the design in action.
                  </p>
                  <a 
                    href={doc.websiteUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    Visit live site →
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

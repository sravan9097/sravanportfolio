# Next.js Website Architecture Prompt

## Overview

This document explains how Next.js is used to build the BC Website, focusing on the file structure, content population system for case studies, and CSS styling architecture.

## Next.js Architecture & File Structure

### Core Framework Setup

- **Next.js 15.3.5** with App Router architecture
- **React 19** with TypeScript for type safety
- **Tailwind CSS 4** for utility-first styling
- **Sass** for custom SCSS components
- **Turbopack** for fast development builds

### Project Structure

```
bc-website/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── layout.tsx          # Root layout with fonts & metadata
│   │   ├── page.tsx           # Homepage
│   │   ├── case-studies/      # Case study pages
│   │   │   └── [slug]/page.tsx # Dynamic case study pages
│   │   ├── principles/         # Engineering principles pages
│   │   │   └── [category]/[slug]/page.tsx
│   │   └── expertise/          # Expertise area pages
│   │       └── [slug]/page.tsx
│   ├── components/            # Reusable React components
│   │   ├── MenuPage.tsx       # Main layout wrapper
│   │   ├── CaseStudyCard.tsx  # Case study preview cards
│   │   ├── TechIcon.tsx       # Technology icon component
│   │   └── ui/                # shadcn/ui components
│   ├── lib/                   # Utility functions & data layer
│   │   ├── case-study.ts      # Case study data management
│   │   ├── tech.ts           # Technology definitions
│   │   ├── expertise.ts      # Expertise area definitions
│   │   └── utils/            # Helper utilities
│   │       ├── file-loader.ts # Markdown file processing
│   │       └── markdown-processor.ts # Markdown to HTML
│   └── styles/               # SCSS styling files
│       ├── layout.scss       # Main layout styles
│       └── markdown-content.scss # Content styling
├── content/                  # Content management
│   ├── case-studies/        # Case study markdown files
│   ├── articles/           # Article markdown files
│   └── principles/         # Principle markdown files
├── public/                 # Static assets
│   ├── case-studies/       # Case study images
│   ├── icons/             # Technology & expertise icons
│   └── principles/        # Principle comic images
└── markdown_standards/    # Content standards documentation
```

## Case Study Content Population System

### 1. Content Management Architecture

**Markdown-First Approach:**

- Case studies are stored as markdown files in `content/case-studies/`
- Each file uses YAML frontmatter for structured metadata
- Content is processed server-side using Next.js App Router

### 2. Data Flow Process

**Step 1: File Loading (`src/lib/utils/file-loader.ts`)**

```typescript
// Loads markdown files from content directory
export async function loadMarkdownFiles(
  directory: string
): Promise<MarkdownFile[]>;
export async function loadMarkdownFileBySlug(
  directory: string,
  slug: string
): Promise<MarkdownFile | null>;
export async function loadMarkdownFilesByArrayField(
  directory: string,
  field: string,
  value: string
): Promise<MarkdownFile[]>;
```

**Step 2: Markdown Processing (`src/lib/utils/markdown-processor.ts`)**

```typescript
// Converts markdown to HTML with syntax highlighting
export async function processMarkdown(content: string): Promise<string>;
// Uses remark ecosystem: remark → remarkGfm → remarkRehype → rehypeHighlight → rehypeStringify
```

**Step 3: Data Transformation (`src/lib/case-study.ts`)**

```typescript
// Transforms raw markdown data into typed interfaces
export interface CaseStudyMetadata {
  slug: string;
  title: string;
  industry: string;
  heroImage: string;
  problemStatement: string;
  clientInfo: string;
  clientImage: string;
  outcomes: CaseStudyOutcome[];
  expertises: string[];
  technologies: CaseStudyTechnology[];
  testimonial: CaseStudyTestimonial;
}

export interface CaseStudy extends CaseStudyMetadata {
  content: string; // Processed HTML content
}
```

### 3. Case Study Template Structure

**Markdown Frontmatter Standard:**

```yaml
---
slug: "case-study-slug"
title: "Case Study Title"
industry: "Industry sector"
heroImage: "/case-studies/{slug}/hero-image.jpg"
problemStatement: "Brief description of the client's challenge"
clientInfo: "Client company name and description"
clientImage: "/case-studies/{slug}/client-logo.png"
outcomes:
  - outcome: "Specific measurable outcome"
    icon: "/case-studies/{slug}/outcome-icon.svg"
expertises: ["expertise-1", "expertise-2"]
technologies:
  - tech: "technology-name"
    purpose: "How this technology was used"
testimonial:
  quote: "Client testimonial quote"
  author: "Author name"
  authorImage: "/case-studies/{slug}/author-image.jpg"
---
```

### 4. Dynamic Page Generation (`src/app/case-studies/[slug]/page.tsx`)

**Server-Side Data Fetching:**

```typescript
export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caseStudy = await getCaseStudyBySlug(slug); // Server-side data loading

  if (!caseStudy) {
    notFound(); // Next.js 404 handling
  }

  // Render case study with structured data
}
```

**Template Rendering Sections:**

1. **Hero Section**: Hero image with title and industry
2. **Problem Statement**: Two-column layout with problem and client info
3. **Outcomes**: Grid of outcome cards with icons
4. **Content**: Processed markdown content with syntax highlighting
5. **Technologies**: Technology tags with icons and purposes
6. **Testimonial**: Customer testimonial with author attribution

### 5. Component Integration

**Reusable Components:**

- `MenuPage`: Two-column layout wrapper
- `CaseStudyCard`: Preview cards for case study listings
- `TechIcon`: Technology icon display with tooltips
- `Breadcrumb`: Navigation breadcrumbs
- `CategoryIcon`: Expertise area icons

## CSS Styling Architecture

### 1. Styling Stack

- **Tailwind CSS 4**: Utility-first CSS framework
- **Sass/SCSS**: Custom component styling
- **CSS Custom Properties**: Design system variables
- **Next.js Font Optimization**: Google Fonts integration

### 2. Design System (`src/app/globals.css`)

**Color Palette:**

```css
:root {
  --color-bc-beige: #f5f3ef; /* Background accent */
  --color-bc-text-gray: #424d5b; /* Secondary text */
  --color-bc-text-black: #373737; /* Primary text */
  --color-bc-red: #e01236; /* Brand accent */
  --font-jetbrains-mono: var(--font-jetbrains-mono);
  --font-nunito-sans: var(--font-nunito-sans);
}
```

**Typography System:**

- **JetBrains Mono**: Code and technical content
- **Nunito Sans**: Body text and headings
- **Responsive scaling**: Mobile-first typography

### 3. Layout Architecture (`src/styles/layout.scss`)

**Two-Column Layout System:**

```scss
.two-column-layout {
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 640px) {
    min-height: 100vh;
    grid-template-columns: repeat(4, 1fr);
  }
}

.sideColumn {
  background-color: $bc-beige;
  grid-column: span 1; // Desktop: 1/4 width
}

.mainColumn {
  grid-column: span 3; // Desktop: 3/4 width
  padding: 2rem;
}
```

**Responsive Breakpoints:**

- **Mobile**: Single column, stacked layout
- **Desktop (640px+)**: Two-column grid layout
- **Content scaling**: Responsive typography and spacing

### 4. Content Styling (`src/styles/markdown-content.scss`)

**Markdown Content Processing:**

```scss
.markdown-content {
  // Typography scaling
  font-size: 1rem;
  @media (min-width: 768px) {
    font-size: 1.125rem;
  }

  // Heading hierarchy
  h1 {
    font-size: 2.25rem;
    font-weight: 700;
  }
  h2 {
    font-size: 1.875rem;
    font-weight: 600;
  }
  h3 {
    font-size: 1.3rem;
    font-weight: 600;
    color: var(--color-bc-red);
  }

  // Code highlighting
  pre {
    background-color: #000000;
    border-radius: 0.5rem;
    padding: 1rem;
  }

  // Table styling
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 1.5rem 0;
  }
}
```

### 5. Component-Specific Styling

**Case Study Components:**

- **Hero Images**: Responsive aspect ratios with object-fit
- **Outcome Cards**: Shadow effects with border styling
- **Technology Tags**: Flexbox layout with hover effects
- **Testimonial Blocks**: Card-based design with author attribution

**Interactive Elements:**

- **Hover States**: Smooth transitions and color changes
- **Focus States**: Accessibility-compliant focus indicators
- **Responsive Images**: Next.js Image optimization with multiple formats

## Key Next.js Features Utilized

### 1. App Router Architecture

- **Server Components**: Server-side rendering for content
- **Dynamic Routes**: `[slug]` and `[category]/[slug]` patterns
- **Parallel Routes**: Concurrent data loading
- **Loading States**: Built-in loading UI patterns

### 2. Performance Optimizations

- **Image Optimization**: Automatic WebP/AVIF conversion
- **Font Optimization**: Google Fonts with display swap
- **Bundle Splitting**: Automatic code splitting
- **Static Generation**: Pre-rendered pages where possible

### 3. Developer Experience

- **TypeScript**: Full type safety across the application
- **ESLint**: Code quality and consistency
- **Hot Reload**: Fast development iteration
- **Turbopack**: Faster build times in development

### 4. SEO & Metadata

- **Dynamic Metadata**: Page-specific meta tags
- **Structured Data**: Rich snippets for case studies
- **Sitemap Generation**: Automatic sitemap creation
- **Open Graph**: Social media sharing optimization

This architecture provides a scalable, maintainable, and performant foundation for a content-driven website with dynamic case study generation and responsive design.

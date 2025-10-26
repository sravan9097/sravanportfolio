# Content Management Guide

This guide explains how to create and manage case studies and articles using the markdown-based content system.

## Overview

The portfolio uses a markdown-first approach where content is stored as `.md` files with YAML frontmatter metadata. Content is processed at build time and rendered through React components.

## File Structure

```
src/content/
├── articles/           # Article markdown files
├── case-studies/       # Case study markdown files
└── README.md          # This documentation
```

## Frontmatter Schema

### Required Fields

All content files must include these fields:

```yaml
---
slug: "unique-identifier"           # URL slug (e.g., "my-project")
title: "Project Title"               # Display title
category: "Case Study" | "Article"  # Content type
description: "Brief description"     # Meta description
image: "/path/to/cover-image.png"    # Cover image (optional)
date: "2024-01-15"                   # Publication date (YYYY-MM-DD)
tags: ["tag1", "tag2"]               # Array of tags
---
```

### Case Study Specific Fields

Case studies can include additional fields:

```yaml
timeline: "1 month" # Project duration
tools: ["Figma", "Sketch"] # Tools used
role: "UX Designer" # Your role
prototypeLinks: # Interactive prototypes
  - label: "Desktop Prototype"
    url: "https://figma.com/..."
    icon: "desktop"
  - label: "Mobile Prototype"
    url: "https://figma.com/..."
    icon: "mobile"
figmaFileUrl: "https://figma.com/..." # Main Figma file
```

## Markdown Content Structure

### Case Study Template

Use this structure for case studies:

```markdown
## The Challenge

[Problem statement and context]

## The Approach

### Understanding the Core Vision

[Your process and methodology]

## Wireframing & Early Concepts

### Wireframing

[Early wireframes with images]

### Exploring Concepts

[Concept exploration with images]

> Key feedback or insights

## Final Layout & High-Fidelity Prototype

### Design Direction

[Design decisions and rationale]

### Interactivity

[Interactive features and prototypes]

## Building the Design System

[Design system documentation]

<!-- CAROUSEL: design-system-slides -->

## Final UI – Desktop & Mobile

### Desktop Screens

<!-- CAROUSEL: desktop-screens -->

### Mobile Screens

<!-- CAROUSEL: mobile-screens -->

### Outcome

[Results and impact]

### Reflections

[Lessons learned and insights]
```

### Article Template

Articles use a simpler structure:

```markdown
## Introduction

[Opening context]

## Main Content

[Your insights and analysis]

## Conclusion

[Key takeaways]
```

## Special Features

### Image Carousels

Use HTML comments to insert image carousels:

```markdown
<!-- CAROUSEL: desktop-screens -->
<!-- CAROUSEL: mobile-screens -->
<!-- CAROUSEL: design-system-slides -->
```

Available carousel types:

- `desktop-screens` - Desktop UI screenshots
- `mobile-screens` - Mobile UI screenshots
- `design-system-slides` - Design system components

### Images

Reference images from the `/public` directory:

```markdown
![Alt text](/path/to/image.png)
```

All images are automatically made responsive with rounded corners.

### Blockquotes

Use blockquotes for important insights:

```markdown
> "This is an important insight or feedback."
```

### Lists

Use bullet lists for features, outcomes, etc.:

```markdown
- Feature one
- Feature two
- Feature three
```

## Migration Guide

### Converting TSX Components to Markdown

1. **Extract frontmatter data** from the TSX component props/state
2. **Convert JSX content to markdown**:
   - Replace JSX elements with markdown equivalents
   - Convert image components to `![alt](src)` syntax
   - Replace carousel components with `<!-- CAROUSEL: type -->` comments
3. **Update routing** - Remove from `projectComponents` map in `[projectid].tsx`
4. **Test the new route** - Ensure `/project/slug` works correctly

### Example Migration

**Before (TSX):**

```tsx
const MyProject = () => (
  <ProjectLayout title="My Project">
    <h1>My Project</h1>
    <img src="/images/cover.png" alt="Cover" />
    <Carousel images={slides} />
  </ProjectLayout>
);
```

**After (Markdown):**

```yaml
---
slug: my-project
title: My Project
category: Case Study
description: Project description
image: /images/cover.png
date: 2024-01-15
tags: ["ux", "design"]
---
# My Project

<!-- CAROUSEL: project-slides -->
```

## Best Practices

### Content Writing

1. **Use clear headings** - Structure content with proper h2/h3 hierarchy
2. **Include context** - Explain the problem, process, and outcome
3. **Add visual elements** - Use images, diagrams, and prototypes
4. **Keep it scannable** - Use lists, blockquotes, and short paragraphs

### Image Management

1. **Optimize images** - Use WebP format when possible
2. **Use descriptive alt text** - For accessibility
3. **Organize in folders** - Group related images in `/public/project-name/`
4. **Consistent naming** - Use kebab-case for file names

### Frontmatter

1. **Unique slugs** - Ensure no duplicate slugs across all content
2. **Descriptive titles** - Clear, compelling titles
3. **Relevant tags** - Use consistent tag naming
4. **Complete metadata** - Fill all applicable fields

## Troubleshooting

### Common Issues

**Images not loading:**

- Check image paths start with `/`
- Ensure images exist in `/public` directory
- Verify file extensions are correct

**Carousels not rendering:**

- Check carousel type matches available types
- Ensure HTML comment syntax is correct
- Verify carousel data exists in `CaseStudyTemplate.tsx`

**Styling issues:**

- Check SCSS module classes are applied
- Verify Tailwind classes are valid
- Ensure responsive breakpoints work

### Getting Help

1. Check existing case studies for examples
2. Review the `CaseStudyTemplate.tsx` component
3. Test changes in development mode
4. Validate markdown syntax

## File Naming Convention

- Use kebab-case for file names: `my-project-name.md`
- Match the slug in frontmatter
- Place in appropriate folder (`articles/` or `case-studies/`)

Example: `src/content/case-studies/beautifulcode-revamp.md`

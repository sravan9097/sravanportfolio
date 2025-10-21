# Carousel Data Management

This document explains how to manage carousel data in the portfolio system.

## Overview

Carousel data has been extracted from template components and moved to a centralized, flexible system that supports both global and document-specific carousel configurations.

## Architecture

### 1. Global Carousel Data (`/src/lib/carouselData.ts`)

Contains all shared carousel data that can be used across multiple documents:

```typescript
export const carouselData: CarouselData = {
  'design-system-slides': [...],
  'desktop-screens': [...],
  'mobile-screens': [...],
  // ... more carousels
};
```

### 2. Document-Specific Carousel Data

Carousel data can be defined directly in markdown frontmatter:

```yaml
---
slug: my-project
title: My Project
carousels:
  my-custom-slides:
    - src: "/my-project/image1.png"
      alt: "Image 1"
      caption: "Description of image 1"
    - src: "/my-project/image2.png"
      alt: "Image 2"
      caption: "Description of image 2"
---
```

### 3. Template Components

Both `CaseStudyTemplate` and `ArticleTemplate` components now:

1. **First check** for carousel data in the document's frontmatter
2. **Fallback** to global carousel data if not found
3. **Log warnings** if no carousel data is found

## Usage Patterns

### Pattern 1: Global Carousel Data

Use global carousel data for common carousels that are shared across multiple documents:

```markdown
<div data-carousel="desktop-screens"></div>
```

### Pattern 2: Document-Specific Carousel Data

Define carousel data in the document's frontmatter for project-specific content:

```yaml
carousels:
  project-screens:
    - src: "/project/screen1.png"
      alt: "Screen 1"
      caption: "Description"
```

Then use it in the markdown:

```markdown
<div data-carousel="project-screens"></div>
```

### Pattern 3: Mixed Approach

Combine both approaches - use global data for common carousels and document-specific data for unique content.

## Benefits

### 1. **Separation of Concerns**

- Template components focus on rendering
- Carousel data is managed separately
- Content creators can define their own carousels

### 2. **Flexibility**

- Global carousels for shared content
- Document-specific carousels for unique content
- Easy to add new carousels without touching templates

### 3. **Maintainability**

- All carousel data in one place (`carouselData.ts`)
- Easy to update captions and image paths
- Clear fallback system

### 4. **Scalability**

- Easy to add new carousel types
- Support for different carousel configurations
- Extensible for future needs

## Adding New Carousels

### Global Carousels

1. Add carousel data to `/src/lib/carouselData.ts`:

```typescript
export const carouselData: CarouselData = {
  // ... existing carousels
  "new-carousel-type": [
    {
      src: "/path/to/image1.png",
      alt: "Alt text 1",
      caption: "Caption 1",
    },
    // ... more images
  ],
};
```

2. Use in markdown:

```markdown
<div data-carousel="new-carousel-type"></div>
```

### Document-Specific Carousels

1. Add carousel data to document frontmatter:

```yaml
carousels:
  my-unique-carousel:
    - src: "/my-project/image1.png"
      alt: "Alt text"
      caption: "Caption"
```

2. Use in markdown:

```markdown
<div data-carousel="my-unique-carousel"></div>
```

## Migration Guide

### From Hardcoded Templates

**Before:**

```typescript
// Carousel data hardcoded in template
const carouselData = {
  'my-carousel': [...]
};
```

**After:**

```typescript
// Carousel data in external file or frontmatter
const images = getCarouselData("my-carousel");
```

### Moving Existing Carousels

1. **Identify** carousel data in template components
2. **Move** to `/src/lib/carouselData.ts`
3. **Update** template components to use `getCarouselData()`
4. **Test** that carousels still work

## Best Practices

### 1. **Naming Conventions**

- Use descriptive names: `desktop-screens`, `mobile-screens`
- Use kebab-case for consistency
- Include project context when needed: `bc-experience-slides`

### 2. **Image Organization**

- Keep images in project-specific folders
- Use consistent naming patterns
- Optimize images for web performance

### 3. **Caption Writing**

- Write descriptive, helpful captions
- Include context about what the image shows
- Keep captions concise but informative

### 4. **Data Structure**

- Always include `src`, `alt`, and `caption`
- Use relative paths starting with `/`
- Ensure alt text is descriptive and accessible

## Troubleshooting

### Carousel Not Showing

1. **Check console warnings** - look for missing carousel data warnings
2. **Verify carousel name** - ensure it matches exactly
3. **Check data structure** - ensure all required fields are present
4. **Test fallback** - verify global carousel data exists

### Images Not Loading

1. **Check image paths** - ensure they're correct and accessible
2. **Verify file existence** - ensure images exist in public folder
3. **Check permissions** - ensure images are publicly accessible

### Performance Issues

1. **Optimize images** - compress and resize images appropriately
2. **Use lazy loading** - images are loaded on demand
3. **Consider image formats** - use WebP for better compression

## Future Enhancements

### Potential Improvements

1. **Dynamic Carousel Loading** - Load carousel data from API
2. **Image Optimization** - Automatic image compression and resizing
3. **Carousel Analytics** - Track carousel usage and engagement
4. **A/B Testing** - Test different carousel configurations
5. **Carousel Templates** - Predefined carousel layouts and styles

### Extensibility

The current system is designed to be extensible:

- **New carousel types** can be added easily
- **Custom carousel components** can be created
- **Carousel data sources** can be extended (API, CMS, etc.)
- **Carousel behaviors** can be customized per document

This architecture provides a solid foundation for managing carousel data while maintaining flexibility and maintainability.

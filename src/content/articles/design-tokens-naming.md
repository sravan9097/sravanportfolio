---
slug: design-tokens-naming
title: Naming Design Tokens — A Vital Step in the Design System Journey
category: Article
description: A practical guide to naming design tokens for clarity, scale, and collaboration.
image: /Hero_Images/naming-design-tokens.webp
date: 2024-07-01
tags:
  - design-system
  - tokens
  - naming
---

## Introduction

Design tokens are the shared language between design and engineering. They serve as the foundation of any scalable design system, providing a consistent way to communicate design decisions across teams and platforms. However, the effectiveness of design tokens heavily depends on how well they are named.

> Good names reduce cognitive load and make systems predictable.

Clear, semantic naming helps designers, developers, and even AI tools reason about intent and purpose, making the entire system more maintainable and scalable.

## The Challenge with Poor Naming

### Common Problems

Many design systems suffer from poorly named tokens that create confusion:

- **Visual Descriptions**: Names like `blue-500` or `large-spacing` focus on appearance rather than purpose
- **Inconsistent Patterns**: Mixed naming conventions across different token categories
- **Lack of Context**: Names that don't indicate where or how tokens should be used
- **Technical Implementation**: Names that expose implementation details rather than design intent

### Impact on Teams

Poor naming creates several problems:

- **Increased Cognitive Load**: Team members must remember what each token represents
- **Reduced Adoption**: Developers avoid using tokens they don't understand
- **Maintenance Overhead**: Changes require extensive documentation updates
- **Inconsistent Usage**: Different interpretations lead to inconsistent implementations

## Principles of Good Token Naming

### 1. Prefer Purpose Over Appearance

Instead of describing how something looks, describe what it's for:

```css
/* Avoid: Visual descriptions */
color-blue-500
spacing-large
font-size-18

/* Prefer: Purpose-driven names */
color-primary-action
spacing-section-gap
font-size-body-large
```

### 2. Encode Semantics, Not Values

Focus on meaning rather than specific values:

```css
/* Avoid: Value-based naming */
color-ffffff
spacing-16px
border-radius-8px

/* Prefer: Semantic naming */
color-surface-primary
spacing-component-padding
border-radius-card
```

### 3. Keep Names Predictable and Composable

Use consistent patterns that allow for logical composition:

```css
/* Consistent pattern */
color.background.surface.default
color.background.surface.hover
color.background.surface.active

color.text.primary
color.text.secondary
color.text.muted

space.inline.sm
space.inline.md
space.inline.lg
```

## Token Naming Strategies

### Hierarchical Structure

Organize tokens in a clear hierarchy:

```
category.property.scale.state
```

**Examples:**

- `color.background.surface.default`
- `color.text.primary.hover`
- `space.component.padding.sm`
- `typography.heading.h1.desktop`

### Category-Based Organization

Group tokens by their functional category:

#### Color Tokens

```css
color.primary.*
color.secondary.*
color.surface.*
color.text.*
color.border.*
color.feedback.*
```

#### Spacing Tokens

```css
space.component.*
space.layout.*
space.section.*
space.inline.*
```

#### Typography Tokens

```css
typography.heading.*
typography.body.*
typography.caption.*
typography.code.*
```

### State and Context Modifiers

Include state and context information:

```css
/* States */
color.primary.default
color.primary.hover
color.primary.active
color.primary.disabled

/* Contexts */
color.text.primary
color.text.secondary
color.text.muted
color.text.inverse
```

## Implementation Examples

### Color Token Structure

```css
/* Primary colors */
color-primary-default: #007bff;
color-primary-hover: #0056b3;
color-primary-active: #004085;

/* Surface colors */
color-surface-primary: #ffffff;
color-surface-secondary: #f8f9fa;
color-surface-tertiary: #e9ecef;

/* Text colors */
color-text-primary: #212529;
color-text-secondary: #6c757d;
color-text-muted: #adb5bd;
color-text-inverse: #ffffff;
```

### Spacing Token Structure

```css
/* Component spacing */
space-component-padding-sm: 0.5rem;
space-component-padding-md: 1rem;
space-component-padding-lg: 1.5rem;

/* Layout spacing */
space-layout-gap-sm: 1rem;
space-layout-gap-md: 2rem;
space-layout-gap-lg: 3rem;

/* Section spacing */
space-section-margin-sm: 2rem;
space-section-margin-md: 4rem;
space-section-margin-lg: 6rem;
```

### Typography Token Structure

```css
/* Font families */
font-family-primary: "Inter", sans-serif;
font-family-secondary: "Georgia", serif;
font-family-code: "Monaco", monospace;

/* Font sizes */
font-size-heading-h1: 2.5rem;
font-size-heading-h2: 2rem;
font-size-heading-h3: 1.5rem;
font-size-body-large: 1.125rem;
font-size-body-default: 1rem;
font-size-body-small: 0.875rem;
```

## Migration Strategies

### 1. Audit Existing Tokens

Start by cataloging all existing tokens and their usage:

- **Identify Patterns**: Look for common naming conventions
- **Find Inconsistencies**: Spot tokens that don't follow established patterns
- **Map Dependencies**: Understand how tokens are used across the system

### 2. Create Naming Guidelines

Establish clear guidelines for your team:

```markdown
## Token Naming Guidelines

### Structure

- Use dot notation for hierarchy: `category.property.scale.state`
- Use kebab-case for multi-word properties: `font-family-primary`
- Use lowercase for all token names

### Categories

- `color`: All color-related tokens
- `space`: All spacing-related tokens
- `typography`: All typography-related tokens
- `border`: All border-related tokens
- `shadow`: All shadow-related tokens

### Scales

- `sm`, `md`, `lg`: Small, medium, large
- `xs`, `sm`, `md`, `lg`, `xl`: Extended scale
- `default`: Default state (can be omitted)

### States

- `default`: Default state
- `hover`: Hover state
- `active`: Active state
- `disabled`: Disabled state
- `focus`: Focus state
```

### 3. Gradual Migration

Migrate tokens incrementally to avoid breaking changes:

1. **Create New Tokens**: Add new, well-named tokens alongside existing ones
2. **Update Components**: Gradually update components to use new tokens
3. **Remove Old Tokens**: Once migration is complete, remove deprecated tokens
4. **Update Documentation**: Keep documentation current throughout the process

## Best Practices

### Do's

- **Use Semantic Names**: Focus on purpose and meaning
- **Be Consistent**: Follow established patterns throughout
- **Document Decisions**: Explain naming choices and conventions
- **Consider Context**: Include context information in names
- **Plan for Growth**: Design naming patterns that can scale

### Don'ts

- **Avoid Visual Descriptions**: Don't name tokens based on appearance
- **Don't Use Values**: Avoid including specific values in names
- **Avoid Abbreviations**: Use full words for clarity
- **Don't Mix Conventions**: Stick to one naming pattern
- **Avoid Generic Names**: Be specific about purpose and context

## Tools and Automation

### Token Management Tools

Several tools can help manage design tokens:

- **Style Dictionary**: Transform and build design tokens
- **Figma Tokens**: Sync tokens between Figma and code
- **Theo**: Generate design tokens for multiple platforms
- **Design Tokens Studio**: Visual token management

### Automated Validation

Implement automated checks to ensure naming consistency:

```javascript
// Example validation rules
const namingRules = {
  color: /^color\.[a-z-]+\.[a-z-]+(\.[a-z-]+)?$/,
  space: /^space\.[a-z-]+\.[a-z-]+(\.[a-z-]+)?$/,
  typography: /^typography\.[a-z-]+\.[a-z-]+(\.[a-z-]+)?$/,
};
```

## Conclusion

Good token naming is essential for creating maintainable, scalable design systems. By following semantic naming principles, establishing clear patterns, and implementing consistent guidelines, teams can create token systems that are intuitive, predictable, and easy to use.

The key is to think beyond the immediate implementation and consider how tokens will be used across different contexts, by different team members, and over time. Well-named tokens become a shared language that enables better collaboration and more consistent design implementation.

> "The best token names are those that make the system's intent clear to anyone who encounters them, regardless of their role or experience level."

Remember that token naming is an iterative process. Start with clear principles, establish patterns, and refine them based on real-world usage and team feedback. The investment in good naming practices pays dividends in system maintainability and team productivity.

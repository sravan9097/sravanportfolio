import React, { useState, useEffect } from "react";
import ProjectLayout from "@/components/ProjectLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

const DesignTokenNamingArticle = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tokenLevels = [
    {
      name: "Namespace",
      description: "Name of your system, theme, domain. Acts as an identifier for the token.",
      example: "system, theme, domain"
    },
    {
      name: "Object",
      description: "Component group (patterns), component, element within a component.",
      example: "button, form, icon"
    },
    {
      name: "Base",
      description: "Category, concept, property. The main distinguishing factor of a token.",
      example: "color, text, radius"
    },
    {
      name: "Modifier",
      description: "Variant, state, scale, mode. The differentiating factor from other tokens.",
      example: "hover, dark, 2x"
    }
  ];

  const tokenTypes = [
    {
      type: "Global Tokens",
      description: "Named for an associated value, abstract usage scenarios",
      example: "gray-100, blue-500, font-size-16",
      color: "bg-blue-100 text-blue-800"
    },
    {
      type: "Alias Tokens",
      description: "Reference global tokens with semantic meaning",
      example: "color-primary, color-secondary, font-heading",
      color: "bg-green-100 text-green-800"
    },
    {
      type: "Component-Specific Tokens",
      description: "Specific to components with full context",
      example: "button-primary-background-color-hover",
      color: "bg-purple-100 text-purple-800"
    }
  ];

  const namingConventions = [
    {
      convention: "Pascal Case",
      example: "PrimaryColor",
      pros: "Clear distinction, professional look",
      cons: "Harder to read for long names"
    },
    {
      convention: "Camel Case",
      example: "primaryColor",
      pros: "Common in programming, readable",
      cons: "Can be ambiguous for multi-word names"
    },
    {
      convention: "Underscore Case",
      example: "primary_color",
      pros: "Clear word separation",
      cons: "Longer names, less common in design"
    },
    {
      convention: "Kebab Case",
      example: "primary-color",
      pros: "Highly readable, URL-friendly",
      cons: "Longer names, not common in code"
    }
  ];

  const guidelines = [
    "Avoid abbreviations - Use full words instead of abbreviations for clarity",
    "Be concise, but descriptive - Use clear language to convey meaning",
    "Avoid overlapping or conflicting names - Ensure unique token names",
    "Steer clear of homonyms - Avoid ambiguous terms that can cause confusion"
  ];

  const testingCriteria = [
    {
      criterion: "Clarity",
      description: "Ensure token names describe purpose and usage well",
      test: "Ask team members to explain what tokens do based on names alone"
    },
    {
      criterion: "Consistency",
      description: "Ensure consistent ordering of levels and terminology",
      test: "Review sample set of token names for deviations"
    },
    {
      criterion: "Scalability",
      description: "Token names should accommodate new tokens without confusion",
      test: "Discuss hypothetical scenarios like adding new color schemes"
    },
    {
      criterion: "Specificity vs. abstraction",
      description: "Balance reusability with specific usage details",
      test: "Evaluate tokens outside their immediate context"
    },
    {
      criterion: "Implementation",
      description: "Test tokens in technical environments",
      test: "Check for reserved keywords or technical conflicts"
    }
  ];

  const poorExample = {
    name: "ButtonColor1",
    issues: [
      "Ambiguity - Doesn't specify what it refers to",
      "Lack of context",
      "Non-scalable"
    ]
  };

  const goodExample = {
    name: "button-primary-background-color-hover",
    benefits: [
      "Clarity - Clearly indicates background color",
      "Scalability - Structured naming allows easy expansion for additional states",
      "Consistency - Consistent naming across the system"
    ]
  };

  return (
    <ProjectLayout projectTitle="Naming Design Tokens: A Vital Step in the Design System Journey">
      {/* Hero Section */}
      <div className="aspect-[16/9] w-full overflow-hidden rounded-lg mb-10">
        <img 
          src="/Hero_Images/naming-design-tokens.webp" 
          alt="Design Tokens Naming" 
          className="w-full h-full object-cover" 
        />
      </div>

      

      {/* Introduction */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-foreground">How to Name Design Tokens: A Practical Framework</h2>
        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
        Design tokens power design systems by providing consistent, reusable values for styles like color, spacing, typography, and more. But the true value lies in <span className="font-bold">how clearly those tokens are named</span> — not just what they contain.
        </p>
        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
        Naming tokens is like naming variables in code: if the name doesn’t communicate meaning, it will slow everyone down. This article shows how to structure your token names for clarity and scalability.
        </p>
       
      </section>

      {/* Tokenizing Your Design System */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-foreground">Understanding Design Tokens</h2>
        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
        Simply put, design tokens are variables that define visual properties (colors, fonts, sizes, elevation, etc.) in a design system. Unlike raw CSS variables, tokens carry specific intent. For example, rather than #264653, you might use color-feedback-error, which communicates that it's an error-alert color used across designs.
        </p>
        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
        Tokens should be:
        </p>
        <ul className="list-disc list-inside text-muted-foreground mb-6 leading-relaxed pl-4 text-lg">
          <li>
            <span className="font-bold">Context-aware </span>  (e.g. button hover background, not arbitrary shade)
          </li>
          <li>
            <span className="font-bold">Platform-agnostic - </span> to work across web, iOS, Android
          </li>
          <li>
            <span className="font-bold">Scalable</span> - to accommodate new tokens without confusion
          </li>
          <li>
            <span className="font-bold">Specific</span> - to avoid ambiguity
          </li>
          
        </ul>
      </section>

      {/* Problems with Poor Naming */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-foreground">Problems with Poorly Named Tokens</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex flex-col items-start gap-4 border border-border rounded-xl p-6 hover:shadow-md bg-card">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <span className="text-red-600 text-2xl">⚠️</span>
              </div>
            <div className="flex flex-col">
              <h3 className="font-bold text-lg mb-2 text-card-foreground">Misinterpretation</h3>
              <p className="text-muted-foreground text-sm">
                If poorly named, tokens can lead to confusion among designers, developers, and other stakeholders. Unclear or ambiguous token names may be misinterpreted, leading to incorrect usage or implementation.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start gap-4 border border-border rounded-xl p-6 hover:shadow-md bg-card">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                <span className="text-orange-600 text-2xl">⏱️</span>
              </div>
            <div className="flex flex-col">
              <h3 className="font-bold text-lg mb-2 text-card-foreground">Increased Learning Curve</h3>
              <p className="text-muted-foreground text-sm">
                They would require team members to invest more time and effort in understanding and deciphering the purpose and usage of each token.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start gap-4 border border-border rounded-xl p-6 hover:shadow-md bg-card">
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                <span className="text-yellow-600 text-2xl">🔄</span>
              </div>
            <div className="flex flex-col">
              <h3 className="font-bold text-lg mb-2 text-card-foreground">Reduced Reusability</h3>
              <p className="text-muted-foreground text-sm">
                Nonoptimal naming can limit reusability because they may not clearly communicate their intended purpose or context.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start gap-4 border border-border rounded-xl p-6 hover:shadow-md bg-card">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 text-2xl">👥</span>
              </div>
            <div className="flex flex-col">
              <h3 className="font-bold text-lg mb-2 text-card-foreground">Collaboration Issues</h3>
              <p className="text-muted-foreground text-sm">
                Improper naming can hinder collaboration by introducing communication barriers and misunderstandings between designers and developers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Token Levels */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-foreground">Levels: Breaking It Down</h2>
        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
          Generally, it is recommended to keep token names <strong>modular and meaningful</strong>. Nathan Curtis splits up a token name into 4 major levels: <strong>namespace, object, base, and modifier</strong>.
        </p>
        <div className="flex justify-center">
          <img src="/example_naming.png" alt="Token Levels" className="w-full h-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tokenLevels.map((level, index) => (
            <div key={index} className="flex flex-col items-start gap-4 border border-border rounded-xl p-6 hover:shadow-md bg-card">
             
              <div className="flex flex-col">
                <h3 className="font-bold text-lg mb-2 text-card-foreground">{level.name}</h3>
                <p className="text-muted-foreground text-base mb-3">{level.description}</p>
                <Badge variant="secondary" className="text-sm w-fit">
                  Example: {level.example}
                </Badge>
              </div>
            </div>
          ))}
        </div>
       
      </section>

      {/* Token Types */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-foreground">Types of Tokens: The Step-By-Step Approach to Naming</h2>
        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
          A token name can also have two parts of the same level. Using these in different ways or omitting specific parts helps us create different types of tokens - global, alias, and component-specific tokens.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tokenTypes.map((type, index) => (
            <div key={index} className="flex flex-col items-start gap-4 border border-border rounded-xl p-6 hover:shadow-md bg-card">
             
              <div className="flex flex-col w-full">
               
                <h3 className="font-bold text-lg mb-2 text-card-foreground">{type.type}</h3>
                <p className="text-muted-foreground text-sm mb-4">{type.description}</p>
                <div className="bg-muted p-3 rounded-md">
                  <p className="text-sm font-mono text-foreground">{type.example}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8  rounded-lg">
          <img src="/type_of_token.jpg" alt="Token Types" className="w-full h-auto" />
         
        </div>
      </section>

      {/* Guidelines */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-foreground">Guidelines: Best Practices and Tips</h2>
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-foreground">Poor Example: </h3>
            <div className="bg-muted p-3 mb-4 rounded-md">
              <p className="text-lg font-mono text-foreground text-center">ButtonColor1</p>
            </div>
            <div className="p-3">
              <ul className="text-sm text-red-500 space-y-2">
                {poorExample.issues.map((issue, index) => (
                  <li key={index} className="flex items-center flex-row gap-2">
                    <span className="text-red-600 mt-1">✗</span>
                    {issue}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-foreground">Good Example: </h3>
            <div className="bg-muted p-3 mb-4 rounded-md">
              <p className="text-lg font-mono text-foreground text-center">button-primary-background-color-hover</p>
            </div>
            <div className=" p-3">
              <ul className="text-sm text-green-500 space-y-2">
                {goodExample.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 p-6  mt-8 text-lg  rounded-lg border border-border">
          {guidelines.map((guideline, index) => (
            <div key={index} className="flex items-start gap-3 ">
              <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-blue-600 text-sm font-bold">{index + 1}</span>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">{guideline}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Naming Conventions */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-foreground">Conventions: What Do Tokens Look Like?</h2>
        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
          Finally, we get down to the specifics. Tokens from organizations around the world can be seen using various naming conventions - Pascal Case (PrimaryColor), Camel Case (primaryColor), Underscore Case (primary_color), and Kebab Case (primary-color). While they all have their own pros and cons, it is up to the organization to decide what fits them best in terms of readability, experience and comfort of the team, consistency, and clarity.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {namingConventions.map((convention, index) => (
            <div key={index} className="flex flex-col items-start gap-4 border border-border rounded-xl p-6 hover:shadow-md bg-card">
              
              <div className="flex flex-col">
                <h3 className="font-bold text-lg mb-2 text-card-foreground">{convention.convention}</h3>
                <div className="bg-muted p-3 rounded-md mb-4">
                  <p className="text-lg font-mono text-foreground">{convention.example}</p>
                </div>
                <div className="space-y-2 text-base">
                  <div>
                    <strong className="text-green-600">Pros:</strong> {convention.pros}
                  </div>
                  <div>
                    <strong className="text-red-600">Cons:</strong> {convention.cons}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Feedback and Testing
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-foreground">Feedback and Testing: Trying on for Size</h2>
        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
          The patterns described above may work for one system, while absolutely not for another. Feedback and iteration are essential to building the right token naming patterns for your design system, and would contribute highly to the success.
        </p>
        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
          Trying out various patterns and testing the understanding among your design system team members will be crucial to finding the right name.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testingCriteria.map((criterion, index) => (
            <div key={index} className="flex flex-col items-start gap-4 border border-border rounded-xl p-6 hover:shadow-md bg-card">
              <div className="w-16 h-16 rounded-full flex items-center justify-center bg-white p-2">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                  <span className="text-indigo-600 text-xl">🔍</span>
                </div>
              </div>
              <div className="flex flex-col">
                <h3 className="font-bold text-lg mb-2 text-card-foreground">{criterion.criterion}</h3>
                <p className="text-muted-foreground text-sm mb-4">{criterion.description}</p>
                <div className="bg-muted p-3 rounded-md">
                  <p className="text-sm text-foreground"><strong>Test:</strong> {criterion.test}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section> */}

      {/* Conclusion */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-foreground">Final Thoughts</h2>
        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
        Token naming isn't just syntax; it's part of your design system’s grammar. By naming tokens in a semantic, layered way, your team gains clarity, consistency, and scale across platforms.
        </p>
        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
        The naming model should feel logical to both designers and engineers — aligning design intent with code implementation. When your tokens speak clearly, your design system becomes more usable, maintainable, and scalable.
        </p>
       
      </section>

     
      {/* Call to Action */}
      <div className="text-center mt-16">
        <h2 className="text-xl font-bold mb-4 text-primary">Interested in working together?</h2>
        <Button asChild className="bg-accent hover:bg-accent-hover text-white">
          <a href="/#contact">Contact Me</a>
        </Button>
      </div>
    </ProjectLayout>
  );
};

export default DesignTokenNamingArticle; 
import matter from "gray-matter";
import { CarouselImage } from "./carouselData";
import { getImageURL } from "./imageUtils";

export type Doc = {
  slug: string;
  title: string;
  category: "Article" | "Case Study";
  description: string;
  image?: string;
  date: string; // ISO string (YYYY-MM-DD)
  tags: string[];
  body: string;
  // Case Study specific fields
  rank?: number; // Custom ordering for case studies
  timeline?: string;
  tools?: string[];
  role?: string;
  prototypeLinks?: Array<{label: string; url: string; icon?: string}>;
  figmaFileUrl?: string;
  websiteUrl?: string;
  // Carousel data
  carousels?: Record<string, CarouselImage[]>;
};

type Frontmatter = Partial<
  Pick<Doc, "slug" | "title" | "category" | "description" | "image" | "date" | "tags" | "rank" | "timeline" | "tools" | "role" | "prototypeLinks" | "figmaFileUrl" | "websiteUrl" | "carousels">
>;

const files = import.meta.glob("/src/content/**/*.md", { as: "raw", eager: true }) as Record<string, string>;

function basenameWithoutExt(path: string): string {
  const last = path.split("/").pop() || "";
  return last.replace(/\.md$/i, "");
}

function normalizeCategory(input: unknown): Doc["category"] {
  return input === "Case Study" ? "Case Study" : "Article";
}

const docs: Doc[] = Object.entries(files)
  .map(([path, raw]) => {
    const parsed = matter(raw);
    const data = (parsed.data || {}) as Frontmatter;
    const fileSlug = basenameWithoutExt(path);

    const slug = String((data.slug ?? fileSlug)).trim();
    const title = String((data.title ?? slug)).trim();
    const category = normalizeCategory(data.category);
    const description = String((data.description ?? "")).trim();
    const image = data.image ? getImageURL(String(data.image)) : undefined;
    const date = String((data.date ?? "")).trim();
    const tags = Array.isArray(data.tags) ? data.tags.map(String) : [];
    
    // Case Study specific fields
    const rank = typeof data.rank === 'number' ? data.rank : undefined;
    const timeline = data.timeline ? String(data.timeline).trim() : undefined;
    const tools = Array.isArray(data.tools) ? data.tools.map(String) : undefined;
    const role = data.role ? String(data.role).trim() : undefined;
    const prototypeLinks = Array.isArray(data.prototypeLinks) ? data.prototypeLinks : undefined;
    const figmaFileUrl = data.figmaFileUrl ? String(data.figmaFileUrl).trim() : undefined;
    const websiteUrl = data.websiteUrl ? String(data.websiteUrl).trim() : undefined;
    
    // Carousel data
    const carousels = data.carousels && typeof data.carousels === 'object' ? data.carousels as Record<string, CarouselImage[]> : undefined;

    const body = parsed.content?.trim?.() ?? "";

    return { slug, title, category, description, image, date, tags, body, rank, timeline, tools, role, prototypeLinks, figmaFileUrl, websiteUrl, carousels } as Doc;
  })
  .sort((a, b) => {
    // For both Case Studies and Articles, sort by rank (lower rank = higher priority)
    const aRank = a.rank ?? Infinity;
    const bRank = b.rank ?? Infinity;
    return aRank - bRank; // Lower rank appears first
  });

export function getAllDocs(): Doc[] {
  return docs;
}

export function getDocBySlug(slug: string | undefined): Doc | undefined {
  if (!slug) return undefined;
  return docs.find((d) => d.slug === slug);
}

export function getArticles(): Doc[] {
  return docs.filter((d) => d.category === "Article");
}

export function getCaseStudies(): Doc[] {
  return docs.filter((d) => d.category === "Case Study");
}



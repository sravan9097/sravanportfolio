import matter from "gray-matter";

export type Doc = {
  slug: string;
  title: string;
  category: "Article" | "Case Study";
  description: string;
  image?: string;
  date: string; // ISO string (YYYY-MM-DD)
  tags: string[];
  body: string;
};

type Frontmatter = Partial<
  Pick<Doc, "slug" | "title" | "category" | "description" | "image" | "date" | "tags">
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
    const image = data.image ? String(data.image) : undefined;
    const date = String((data.date ?? "")).trim();
    const tags = Array.isArray(data.tags) ? data.tags.map(String) : [];

    const body = parsed.content?.trim?.() ?? "";

    return { slug, title, category, description, image, date, tags, body } as Doc;
  })
  .sort((a, b) => (b.date || "").localeCompare(a.date || ""));

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



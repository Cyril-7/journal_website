// Import all JSON articles in the articles directory dynamically via Vite glob import
const articleModules = import.meta.glob('./articles/*.json', { eager: true });

export interface ArticleSection {
  title: string;
  body: string;
}

export interface Article {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  affiliation?: string;
  date: string;
  // Bibliographic fields required by ISSN India guidelines
  volume?: number;
  issueNumber?: number;
  month?: string;
  year?: number;
  pageStart?: number;
  pageEnd?: number;
  pdfUrl?: string;
  image: string;
  abstract?: string;
  sections?: ArticleSection[];
  references?: string[];
  tags?: string[];
  doi?: string;
  views?: number;
  downloads?: number;
  citations?: number;
}

// Convert modules to array and sort by ID descending (newest articles first)
export const articles: Article[] = Object.values(articleModules)
  .map((mod: any) => mod.default || mod)
  .sort((a, b) => b.id - a.id);

export interface Journal {
  title: string;
  issues: number;
  focus: string;
  image: string;
  issn: string;
  editor: string;
  frequency: string;
}

export const journals: Journal[] = [];

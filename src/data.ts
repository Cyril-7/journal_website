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
  impactFactor: string;
}

export const journals: Journal[] = [
  { 
    title: "Indo-Semitic Studies", 
    issues: 14, 
    focus: "Historical & Theological Research",
    image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&q=80&w=800",
    issn: "2831-402X",
    editor: "Prof. Dr. Joseph Mar Thomas",
    frequency: "Semi-Annually",
    impactFactor: "2.14"
  },
  { 
    title: "Malankara Heritage Review", 
    issues: 8, 
    focus: "Church Identity & Cultural Evolution",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=800",
    issn: "2831-4011",
    editor: "Dr. Anna Kurian",
    frequency: "Annually",
    impactFactor: "1.85"
  },
  { 
    title: "Asian Christianity Quarterly", 
    issues: 22, 
    focus: "Comparative Religion & Eastern Rites",
    image: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&q=80&w=800",
    issn: "2831-4038",
    editor: "Rev. Dr. Geevarghese Gregory",
    frequency: "Quarterly",
    impactFactor: "3.02"
  }
];

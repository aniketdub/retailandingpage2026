export interface TableOfContentsItem {
  id: string;
  title: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  metaDescription: string;
  category: string;
  readTime: string;
  keywords: string[];
  abstract: string;
  tableOfContents: TableOfContentsItem[];
  keyTakeaways: string[];
  content: string;
}

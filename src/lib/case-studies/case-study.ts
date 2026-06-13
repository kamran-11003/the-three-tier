export interface CaseStudySection {
  id: string;
  heading: string;
  body: string; // Markdown supported
}

export interface CaseStudyMeta {
  slug: string;
  title: string;
  subtitle: string;
  client: string; // e.g., 'VSIP'
  publishDate: string; // ISO 8601
  readTime: number; // minutes
  tags: string[];
  coverAbstract: string;
  images: {
    hero: string;
    card: string;
  };
  sections: CaseStudySection[];
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
    ogImage: string;
    canonicalUrl: string;
  };
  schema: {
    articleType: string;
    about: string[]; // e.g., ["Voice AI", "Infrastructure"]
  };
}

export type CaseStudyCard = Pick<
  CaseStudyMeta,
  'slug' | 'title' | 'coverAbstract' | 'tags' | 'images' | 'publishDate' | 'readTime'
>;

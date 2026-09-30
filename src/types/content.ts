export type ImageAsset = {
  src: string;
  alt: string;
};

export type Resource = {
  title: string;
  description: string;
  category: string;
  type: "template" | "checklist" | "guide" | "developer resource" | "career resource" | "technical resource" | "tool";
  slug: string;
  href: string;
  downloadUrl?: string;
  externalUrl?: string;
  image?: ImageAsset;
  cta?: string;
};

export type Article = {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  isoDate: string;
  readingTime: string;
  href: string;
  tags: string[];
  body: Array<{ heading: string; paragraphs: string[]; bullets?: string[] }>;
  image?: ImageAsset;
};

export type Tool = {
  name: string;
  description: string;
  category: string;
  href: string;
};

export type Product = {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  price: string;
  productType: string;
  features: string[];
  whoItIsFor: string;
  purchaseUrl?: string;
  badge?: string;
  image?: ImageAsset;
};

export type ContentCard = {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
};

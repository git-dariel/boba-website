export type LinkItem = {
  label: string;
  href: string;
  external?: boolean;
};

export type MenuItem = {
  name: string;
  description: string;
  price: string;
  image: string;
  alt: string;
  imagePosition?: string;
};

export type MenuSection = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  items: MenuItem[];
};

export type GalleryItem = {
  image: string;
  alt: string;
  caption: string;
  imagePosition?: string;
  emphasis?: "standard" | "feature" | "tall";
};

export type StoryStat = {
  value: string;
  label: string;
};

export type FooterColumn = {
  title: string;
  links: LinkItem[];
};

export type HomeContent = {
  contact: {
    location: string;
    address: string;
    hours: string;
    phoneLabel: string;
    phoneHref: string;
    facebookHref: string;
    mapsHref: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    primaryLink: LinkItem;
    secondaryLink: LinkItem;
    gallery: GalleryItem[];
  };
  menus: MenuSection[];
  culture: {
    eyebrow: string;
    title: string;
    description: string;
    gallery: GalleryItem[];
  };
  story: {
    eyebrow: string;
    title: string;
    description: string;
    stats: StoryStat[];
    cards: GalleryItem[];
  };
  footer: FooterColumn[];
};

import type { LinkItem } from "../../types/content";

export const renderLink = (link: LinkItem, className?: string) => {
  const attrs = link.external ? ' target="_blank" rel="noreferrer"' : "";
  const classes = className ? ` class="${className}"` : "";

  return `<a${classes} href="${link.href}"${attrs}>${link.label}</a>`;
};

export type NavType = {
  key: string;
  label: string;
  href?: string;
  items?: { key: string; name: string; href: string }[];
};

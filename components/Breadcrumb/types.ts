export interface BreadcrumbItemType {
  title: string;
  link?: string;
}

export interface BreadcrumbProps {
  data: BreadcrumbItemType[];
  color?: 'dark' | 'light';
}

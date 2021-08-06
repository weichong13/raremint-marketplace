export interface ListIProps {
  data: {
    title: string;
    featured_image: any;
    author: {
      first_name: string;
      last_name: string;
    };
    published: string;
    meta_description: string;
    slug: string;
  };
}

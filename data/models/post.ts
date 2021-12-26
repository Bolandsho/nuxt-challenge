export type SinglePost = {
  id: number,
  title: string,
  description: string,
  created_at: Date,
  updated_at: Date
}

interface Link {
  url: string;
  label: string;
  active: boolean;
}

export type Post = {
  current_page: number,
  data: SinglePost[],
  from: number,
  last_page: number,
  links: Link[],
  next_page_url: string,
  path: string,
  per_page: number,
  prev_page_url: null | string,
  to: number,
  total: number
}

export interface Category {
  id: number;
  name: string;
}

export interface Article {
  id: number;
  title: string;
  date: string;
  shortDescription: string;
  fullDescription?: string;
}

export interface Response {
  code: number;
}

export interface CategoriesResponse extends Response {
  list: Category[];
}

export interface NewsResponse extends Response {
  list: Article[];
}

export interface ArticleResponse extends Response {
  news: Article;
}
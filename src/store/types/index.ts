import {
  Category,
  Article,
} from 'app/types/api';

export interface RequestStatus {
  state: 'pending' | 'error';
  msg: string;
}

export default interface Store {
  categories: Category[] | null;
  selectedCategory: Category | null;
  news: Article[] | null;
  newsPage: number;
  selectedArticle: Article | null;
  requestStatus: RequestStatus | null;
}
